// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 
// Все последовательности элементов должны иметь одинаковую вероятность. 

let arr = [1, 2, 3];
shuffle(arr)
shuffle(arr)
shuffle(arr)
console.log(arr);

function shuffle(arr){
    arr.sort(() => Math.random() - 0.5)
}