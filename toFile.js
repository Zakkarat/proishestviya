const fs = require('fs');

const toFile = cities => {
  fs.writeFile("./public/ocassions.json", JSON.stringify(cities), err => {
    if (err) {
      throw err;
    }
  });
};

module.exports = toFile;
