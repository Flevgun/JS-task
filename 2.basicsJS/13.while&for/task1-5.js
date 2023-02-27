//task 1
let i = 3;

while (i) {
  alert( i-- );
} 
// Выведет 1

//---------------------
//task 2

let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5

// ----------------------
//task 3

for (let i = 0; i < 5; i++) alert( i );// 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i );// 0 1 2 3 4


// -------------------
//task 4

for (let i = 1; i < 11; i++) {
    if(i%2 == 0) console.log(i)
}


//----------------------
//task 5

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }


let i= 0
while (i<3) {
  console.log(`number ${i}!`)
  i++
}

