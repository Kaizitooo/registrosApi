var fs = require('fs');

fs.appendFile('sangue.txt', ' Você não domina as emoções, elas tomam conta de você. ', function (err,file){
    if (err) throw err;
    console.log('Salvo com sucesso.');
});