


// constructor.js

const resolve = console.log('Its resolved') , 
      reject = console.log('Its rejected') ;



const filename = 'text.txt', 
        fs     = require('fs');





// constructor.js


const text = 
  new Promise(function (resolve, reject) {
    // Normal fs.readFile call, but inside Promise constructor . . . 
    fs.readFile('text.txt', function (err, text) {
      // . . . Call reject if there's an error . . . 
      if (err) 
        reject(err);
      // . . . And call resolve otherwise.
      else
    // We need toString() because fs.readFile returns a buffer.
        resolve(text.toString());
    })
  })

// to return

 .then(resolve);

// .then(undefined,reject);


