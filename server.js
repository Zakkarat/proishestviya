const express = require('express')
const app = express()
const path = require('path');
const db = require("./db")
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
app.get('/proishestviya', (req, res) => {
     db.all('SELECT * FROM proishestviya', (err, rows) => {
     res.send(rows)
     })
  })
app.post('/proishestviya', (req, res) => {
    db.run(`INSERT INTO Proishestviya (time, story) VALUES (${new Date().getTime()}, '${req.body.story}')`);
    res.send("Ok");
  })


  app.listen(9000, () => console.log('Server ready'))