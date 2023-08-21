/* Ordem de Atendimento
    Escreva uma função que simule o atendimento de pessoas em uma fila.
    A função deve receber um array de nomes e um número que representa o número de atendimentos.
    Cada pessoa é atendida e removida da fila a cada iteração. */

class Fila {
    constructor () {
        this.elementos = []
    }

    enqueue(valor) {
        this.elementos.push(valor)
    }

    dequeue() {
        return this.elementos.shift()
    }

    front() {
        if (this.elementos.length === 0) {
            return undefined
        }
        return this.elementos[0]
    }
}

function atender(fila, atendimento){
    const resultado = [];
    const filaSimulacao = new Fila();
    fila.forEach(pessoa => {
        filaSimulacao.enqueue(pessoa)
        
    });
    for (let i = 0; i < atendimento; i++){
        const pessoaAtendida = filaSimulacao.dequeue();
        resultado.push(pessoaAtendida)
    }
    return resultado
}

const pessoa = ["Alice", "Bob", "Carol", "David"];
console.log(atender(pessoa, 2)); // Saída: ["Alice", "Bob"]
