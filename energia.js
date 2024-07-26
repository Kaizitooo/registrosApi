const fs = require('fs');
const path = require('path');

// Cria o arquivo 'energia.txt'
fs.writeFile('caos.txt', 'O caos é inevitável', (err) => {
    if (err) throw err;
    console.log(`${'caos.txt'} criado`);

    // Espera 5 segundos e renomeia o arquivo para 'inevitavel.txt'
    setTimeout(() => {
        fs.rename('caos.txt', 'inevitavel.txt', (err) => {
            if (err) throw err;
            console.log(`${'caos.txt'} renomeado para ${'inevitavel.txt'}`);

            // Espera mais 5 segundos e deleta o arquivo 'inevitavel.txt'
            setTimeout(() => {
                fs.unlink('inevitavel.txt', (err) => {
                    if (err) throw err;
                    console.log(`${'inevitavel.txt'} deletado`);
                });
            }, 5000); // 5000 milissegundos = 5 segundos
        });
    }, 5000); // 5000 milissegundos = 5 segundos
});
