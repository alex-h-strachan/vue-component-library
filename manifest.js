const docComponents = '/module/doc-components';
const components = '/components';

/* eslint-disable import/no-dynamic-require, global-require */
const { readdirSync } = require('fs');

const webpackManifest = {};

function generateWebpackManifest(path, prefix) {
  function stripExtensions(fileName) {
    return fileName.replace(/\..+$/, '');
  }

  readdirSync(path)
    .forEach((file) => { webpackManifest[`${prefix}/${stripExtensions(file)}`] = `${path}/${file}`; });
}

generateWebpackManifest(`${__dirname}${docComponents}`, 'docs');
generateWebpackManifest(`${__dirname}${components}`);

module.exports = webpackManifest;
