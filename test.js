const { resolve } = require('path');

require('glob')(resolve(__dirname, '/src/**/_test_'), (error, files) => {

  console.log(files);
  if (error) {
    throw error;
  }
  files.forEach(file => {
    require(file);
  });
});
