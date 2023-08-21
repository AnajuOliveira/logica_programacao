//Verifica palíndromo
function verificaPalindromo(str) {
    const pilha = [];
    const strLimpa = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let char of strLimpa) {
        pilha.push(char);
    }

    let inverso = '';
    while (pilha.length > 0) {
        inverso += pilha.pop();
    }

    return strLimpa === inverso;
}

console.log(verificaPalindromo('radar')); // Saída: true
console.log(verificaPalindromo('hello')); // Saída: false
