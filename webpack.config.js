const path = require('path');
module.exports = {
      entry: './dist/plumbing/index.js',
      output: {
          filename: './bundle.js',
          path: path.resolve(__dirname, 'dist/plumbing')
      },
      mode: "development"
};
    //mode: "production"
