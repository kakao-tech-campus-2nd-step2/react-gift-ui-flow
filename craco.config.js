const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, '/react-gift-ui-flow/src'),
    },
  },
};
