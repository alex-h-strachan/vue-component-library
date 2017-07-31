const readdirPromise = require('./utils/readdir-promise');

function stripExtensions(fileName) {
  return fileName.replace(/\..+$/, '');
}

async function generateWebpackManifest(path) {
  const webpackManifest = {};

  await readdirPromise(path)
    .then(files =>
      files.forEach((file) => {
        webpackManifest[`${stripExtensions(file)}`] = `${path}/${file}`;
      })
    );

  return webpackManifest;
}

async function buildManifest(path) {
  const manifest = await generateWebpackManifest(path);

  return manifest;
}

module.exports = buildManifest;
