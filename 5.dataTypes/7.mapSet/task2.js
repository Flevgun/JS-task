// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); 


function aclean(arr){
    let map = new Map()
    for(let word of arr){
        let sortArr = word.toLowerCase().split('').sort().join('')
        map.set(sortArr, word)
    }
    return Array.from(map.values())
}