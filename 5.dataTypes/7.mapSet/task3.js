// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.    

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log( keys)  