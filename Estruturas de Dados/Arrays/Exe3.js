//Receba um array de números como parâmetro e retorne o maior e menor números encontrados
function maiorMenor(array) {
    if (array.length === 0){
        return{maior: undefined, menor: undefined}
    }
    let maior = array[0]
    let menor = array[0]
    for (let i = 0; i < array.length; i++){
        if (array[i] > maior){
            maior = array[i]
        }
        if (array[i] < menor){
            menor = array[i]
        }
    }
    return {maior, menor}
}

const num = [5, 6, 1, 9, 0]
console.log(maiorMenor(num))