/*  Pilha de Números
    Crie uma classe Pilha que representa uma pilha de números.
    A classe deve ter métodos para adicionar números(push), remover números(pop) e retornar o número no topo da pilha(top). */

class Pilha{
    constructor(){
        this.elementos = []
    }

    push(valor){ //adiciona um elemento
        this.elementos.push(valor);
    }

    pop(){ //remove um elemento
        return this.elementos.pop();
    }

    top(){
        if (this.elementos.length === 0){
            return undefined
        }
        return this.elementos[this.elementos.length -1]
    }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
console.log(pilha.top());
console.log(pilha.pop());
console.log(pilha.top());