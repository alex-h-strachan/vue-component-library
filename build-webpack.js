/* eslint-disable no-console */
const webpack = require('webpack');

const webpackPromise = config => (
  new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      const info = stats.toJson();

      if (err) return reject(err);
      if (stats.hasErrors) {
        info.errors.forEach(error => console.error(error));
        reject(new Error('webpack compilation failed with errors'));
      }
      if (stats.hasWarnings) {
        info.errors.forEach(warning => console.warn(warning));
      }

      return resolve(stats);
    });
  })
);

module.exports = webpackPromise;
