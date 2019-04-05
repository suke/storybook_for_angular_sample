const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias['styles'] = path.resolve(__dirname, '../src/styles');

  return config;
};