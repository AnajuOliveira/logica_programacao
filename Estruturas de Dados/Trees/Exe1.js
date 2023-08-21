/*  Implementação de Árvore Binária
    Crie uma classe No que representa um nó de uma árvore binária.
    Cada nó deve ter um valor, um nó filho à esquerda e um nó filho à direita.
    Em seguida, crie uma classe ArvoreBinaria que representa a árvore binária, com métodos para inserir um nó e percorrer a árvore em ordem. */

class No{
    constructor(valor){
        this.valor = valor;
        this.esquerda = null;
        this.direita = null
    }
}

class ArvoreBinaria {
    constructor(){
        this.raiz = null
    }

    inserir(valor){
        const novoNo = new No(valor);
        if(!this.raiz){
            this.raiz = novoNo;
        }
        else{
            this.inserirNo(this.raiz, novoNo);
        }
    }

    inserirNo(noAtual, novoNo){
        if (novoNo.valor < noAtual.valor){
            if (!noAtual.esquerda){
                noAtual.esquerda = novoNo
            }
            else{
                this.inserirNo(noAtual.esquerda, novoNo)
            }
        }
        else {
            if (!noAtual.direita){
                noAtual.direita = novoNo
            }
            else {
                this.inserirNo(noAtual.direita, novoNo)
            }
        }
    }

    percorrerOrdem(no, resultado){
        if (no){
            this.percorrerOrdem(no.esquerda, resultado);
            resultado.push(no.valor);
            this.percorrerOrdem(no.direita, resultado)
        }
    }
}

const arvore = new ArvoreBinaria();
arvore.inserir(50);
arvore.inserir(30);
arvore.inserir(70);
arvore.inserir(20);
arvore.inserir(40);
arvore.inserir(60);
arvore.inserir(80);

console.log(arvore.percorrerOrdem()); // Saída: [20, 30, 40, 50, 60, 70, 80]