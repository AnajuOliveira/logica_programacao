//Imprima os divisores

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número inteiro: ', (numero) => {
    numero = parseInt(numero);

    if (numero <= 0) {
        console.log('Por favor, insira um número inteiro positivo maior que 0.');
    } else {
        console.log(`Divisores de ${numero}:`);
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                console.log(i);
            }
        }
    }

    rl.close();
});
