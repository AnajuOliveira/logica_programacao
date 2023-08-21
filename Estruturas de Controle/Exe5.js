//verifique se o número é primo
const readline = require('readline');

//função utilizada para receber o valor pelo terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número inteiro positivo: ', (numero) => {
    numero = parseInt(numero);

    if (numero <= 1) {
        console.log('Por favor, insira um número inteiro positivo maior que 1.');
        rl.close();
    } else {
        let primo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            console.log(`${numero} é um número primo.`);
        } else {
            console.log(`${numero} não é um número primo.`);
        }

        rl.close();
    }
});
