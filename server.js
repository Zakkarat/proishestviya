const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser')
const { pool } = require('./config')
const port = process.env.PORT || 9000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/init', (req, res) => {
  pool.query('CREATE TABLE IF NOT EXISTS Proishestviya (Id SERIAL PRIMARY KEY, time BIGINT, story TEXT)')
  res.send(200)
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
app.get('/proishestviya', (req, res) => {
     pool.query('SELECT * FROM Proishestviya', (err, {rows}) => {
     res.send(rows)
     })
  })
app.post('/proishestviya', (req, res) => {
    pool.query(`INSERT INTO Proishestviya (time, story) VALUES (${new Date().getTime()}, '${req.body.story}')`);
    res.send("Ok");
  })


  app.listen(port, () => console.log('Server ready'))