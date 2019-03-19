const path = require('path');
module.exports = {
      entry: {
        plumbing: './dist/plumbing/index.js',
        app: './dist/app/todo-app.js'
      },
      output: {
          filename: './[name].js',
          path: path.resolve(__dirname, 'dist')
      },
      mode: "development"
};
    //mode: "production"
