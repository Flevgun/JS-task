// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. \
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); 
console.log(arr);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || b < value) {
      arr.splice(i, 1);
      i--;
    }
  }
}
