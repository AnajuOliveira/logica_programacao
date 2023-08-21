//receba a cabeça de uma lista ligada e inverta a ordem dos nós
class no {
    constructor (valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class LinkedList {
    constructor (valor) {
        this.lista = valor;
        this.proximo = null;
    }

    adicionarElemento(valor) {
        const novoNo = new no(valor);
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    inverter() {
        let anterior = null;
        let atual = this.cabeca;
        while (atual) {
            const proximo = atual.proximo;
            atual.proximo = anterior;
            anterior = atual;
            atual = proximo;
        }
        this.cabeca = anterior;
    }

    imprimirElementos() {
        let atual = this.cabeca;
        while (atual) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}

const lista = new LinkedList();
lista.adicionarElemento(10);
lista.adicionarElemento(20);
lista.adicionarElemento(30);
lista.inverter();
lista.imprimirElementos(); // Saída: 30, 20, 10
