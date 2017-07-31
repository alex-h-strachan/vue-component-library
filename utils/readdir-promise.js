const { readdir } = require('fs');

const readdirPromise = path => new Promise((resolve, reject) => {
  readdir(path, (err, files) => {
    if (err) reject(err);
    else resolve(files);
  });
});

module.exports = readdirPromise;
