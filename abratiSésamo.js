var fs = require('fs');

fs.open('morte.txt', 'w', function (err,file){
    if (err) throw err;
    console.log('Salvo com sucesso.');
});