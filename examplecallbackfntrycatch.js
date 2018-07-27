

"use strict";

// This example uses Node, and so won't run in the browser. 
const filename = 'throwaway.txt',
        fs       = require('fs');

console.log('Reading file . . . ');

fs.readFile(`${__dirname}/${filename + 'a'}`, function (err, contents) {
  if (err) { // catch
    console.log( `There was a/n ${err}.` );
  } else   { // try
    console.log( `Got it. File contents are: '${file}'`);
  }
});
