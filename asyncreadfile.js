

"use strict";

const filename = 'throwaway.txt',
      fs       = require('fs');

let file, useless;

useless = fs.readFile(`${__dirname}/${filename}`, function callback (error, contents) {
  file = contents;
  console.log( `Got it. Contents are: ${contents}`);
  console.log( `. . . But useless is still ${useless}.` );
});

// Thanks to Rava for catching an error in this line.
console.log(`File is ${useless}, but that'll change soon.`);
