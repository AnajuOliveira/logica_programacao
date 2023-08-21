//Remover Elemeto

class no{
    constructor(valor){
        this.valor = valor;
        this.proximo = null
    }
}

class LinkedList{
    constructor(){
        this.cabeca = null
    }

    adicionarElemento(valor){
        const novoNo = new no(valor);
        if(!this.cabeca){
            this.cabeca = novoNo
        }
        else{
            let atual = this.cabeca;
            while(atual.proximo){
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
    }

    imprimirElementos(){
        let atual = this.cabeca;
        while(atual){
            console.log(atual.valor);
            atual = atual.proximo
        }
    }

    removerElemento(valor){
        if(!this.cabeca.valor === valor){
            this.cabeca = this.cabeca.proximo;
            return
        }
        let anterior = this.cabeca;
        let atual = this.cabeca.proximo;
        while(atual){
            if(atual.valor === valor){
                anterior.proximo = atual.proximo;
                return
            }
            anterior = atual;
            atual = atual.proximo
        }
    }
}

const lista = new LinkedList();
lista.adicionarElemento(10);
lista.adicionarElemento(20);
lista.adicionarElemento(30);
lista.removerElemento(20);
lista.imprimirElementos();