//Receba um array de números e retorne a média

function Media(array){
    if (array.length === 0){
        return 0
    }
    else {
        let soma = 0
        for (let i = 0; i < array.length; i++){
            soma += array[i]
        }
        return soma / array.length
    }
}

const numr = [3, 8, 10, 5]
console.log(Media(numr)) //6.5