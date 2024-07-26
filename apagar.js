var fs = require('fs');

fs.unlink('energia.txt', function (err, file){
    if (err) throw err;
    console.log('Apagou');
});