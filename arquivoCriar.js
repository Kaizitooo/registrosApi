var fs = require('fs');

fs.appendFile('sabedoria.txt', 'Saber tudo é perder tudo.', function(err){
    if (err) throw err;
    console.log('Salvo com sucesso.');
});
