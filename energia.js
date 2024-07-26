const fs = require('fs');
const path = require('path');

// A cada cinco segundos algo acontece, o caos é criado,
//se torna inevitável e depois é destruído até que o processo se repita
fs.writeFile('caos.txt', 'O caos é inevitável', (err) => {
    if (err) throw err;
    console.log(`${'caos.txt'} criado`);

    setTimeout(() => {
        fs.rename('caos.txt', 'inevitavel.txt', (err) => {
            if (err) throw err;
            console.log(`${'caos.txt'} renomeado para ${'inevitavel.txt'}`);

            setTimeout(() => {
                fs.unlink('inevitavel.txt', (err) => {
                    if (err) throw err;
                    console.log(`${'inevitavel.txt'} deletado`);
                });
            }, 5000);
        });
    }, 5000);
});
