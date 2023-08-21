//crie uma lista e receba novos valores

class no {
    constructor (valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class LinkList {
    removerElemento(arg0) {
        throw new Error("Method not implemented.");
    }
    constructor () {
        this.cabeca = null;
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

    imprimirElementos() {
        let atual = this.cabeca;
        while (atual) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }
}

const lista = new LinkList();
lista.adicionarElemento(10);
lista.adicionarElemento(20);
lista.adicionarElemento(30);
lista.imprimirElementos();
