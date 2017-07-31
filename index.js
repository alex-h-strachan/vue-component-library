/* eslint-disable import/no-dynamic-require, global-require */
const buildManifest = require('./build-manifest');
const buildWebpack = require('./build-webpack');

const build = async (path, output, options) => {
  const env = options.env || 'development';
  const entryManifest = await buildManifest(path, output, options);

  const webpackConfig = require(`./webpack/${env}.js`);
  webpackConfig.entry = entryManifest;

  console.log(entryManifest);

  webpackConfig.output = {
    filename: '[name].js',
    path: output,
  };

  await buildWebpack(webpackConfig);

  console.log('here');
};

module.exports = function builder(path) {
  return {
    to(output) {
      return {
        async with(options) {
          await build(path, output, options);
        },
      };
    },
  };
};
