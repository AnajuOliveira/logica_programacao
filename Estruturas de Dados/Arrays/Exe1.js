//Receba um array de números como parâmetro e retorne a soma dos elementos contidos nele

function SomaElementos(array){
    let soma = 0
    for (let i = 0; i < array.length; i++){ //array.length retorna a quantidade de elementos contidos no array
        soma += array[i]
    }
    return soma //soma = 13
}
const numeros = [1, 5, 3, 4];
console.log(SomaElementos(numeros))