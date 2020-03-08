const fs = require('fs');

const toFile = cities => {
  fs.writeFile("./public/ocassions.json", JSON.stringify(cities), err => {
    if (err) {
      throw err;
    }
    console.log('heh')
  });
};

module.exports = toFile;
