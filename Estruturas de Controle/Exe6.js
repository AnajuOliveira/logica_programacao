//Sequência de fibonaci
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; sequence[i - 1] + sequence[i - 2] <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

rl.question('Digite um número inteiro: ', (numero) => {
    numero = parseInt(numero);

    if (numero < 0) {
        console.log('Por favor, insira um número inteiro não negativo.');
    } else {
        const fibSequence = fibonacci(numero);
        console.log('Sequência de Fibonacci até o número', numero + ':', fibSequence.join(', '));
    }

    rl.close();
});
