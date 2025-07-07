const webpack = require('webpack');
const WorkBoxPlugin = require('workbox-webpack-plugin');

module.exports = function override(config) {
  config.resolve.fallback = {
    process: require.resolve('process/browser'),
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    util: require.resolve('util'),
    buffer: require.resolve('buffer'),
  };

  // Configure Sass to use modern API
  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((oneOfRule) => {
        if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
          oneOfRule.use.forEach((useItem) => {
            if (useItem.loader && useItem.loader.includes('sass-loader')) {
              if (!useItem.options) {
                useItem.options = {};
              }
              if (!useItem.options.sassOptions) {
                useItem.options.sassOptions = {};
              }
              // Use modern Sass API
              useItem.options.sassOptions.api = 'modern-compiler';
              // Suppress deprecation warnings
              useItem.options.sassOptions.silenceDeprecations = [
                'legacy-js-api',
              ];
            }
          });
        }
      });
    }
  });

  // https://stackoverflow.com/questions/69135310/workaround-for-cache-size-limit-in-create-react-app-pwa-service-worker
  config.plugins.forEach((plugin) => {
    if (plugin instanceof WorkBoxPlugin.InjectManifest) {
      plugin.config.maximumFileSizeToCacheInBytes = 50 * 1024 * 1024;
    }
  });

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  return config;
};
