// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // a b function()
// так как this получает arr и выводит массив