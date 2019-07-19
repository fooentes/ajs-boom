const fs = require('fs');
const mkdirp = require('mkdirp');

const args = process.argv.slice(2);
console.log(args[0]);

const fileContent = `
<b>teste</b>
teste
teste`;

console.log(mkdirp)
mkdirp('tmp/some/path/foo', function(err) { 
});

// fs.appendFile('tmp/myfile1.txt', fileContent, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

