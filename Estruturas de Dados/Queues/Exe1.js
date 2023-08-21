/* Implementação de Fila
Crie uma classe Fila que representa uma fila de números.
A classe deve ter métodos para adicionar números(enqueue), remover números(dequeue) e retornar o número no início da fila(front). */

class Fila{
    constructor(){
        this.elementos = []
    }

    enqueue(valor){
        this.elementos.push(valor)
    }

    dequeue(){
        return this.elementos.shift()
    }

    front(){
        if (this.elementos.length === 0){
            return undefined
        }
        return this.elementos[0]
    }
}

const fila = new Fila();
fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);
console.log(fila.front()); // Saída: 10
console.log(fila.dequeue()); // Saída: 10
console.log(fila.front()); // Saída: 20