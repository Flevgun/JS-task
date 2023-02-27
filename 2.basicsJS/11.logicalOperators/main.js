// console.log( null || 2 || undefined ); // 2

// //--------------------

// console.log( console.log(1) || 2 || console.log(3) ); // 1 2

// // ----------------------

// console.log( 1 && null && 2 ); // null

// // ------------------------

// console.log( console.log(1) && console.log(2) ) // 1 undefined

// //---------------------------

// console.log( null || 2 && 3 || 4 ) // 3

// //------------------------

// if(age <= 90 && age >= 14){}

// // --------------

// if(age > 90 && age < 14){} // without !

// if(!(age <= 90 && age >= 14)){}// with !

// //---------------

// if (-1 || 0) console.log( 'first' ); // Выполнится
// if (-1 && 0) console.log( 'second' ); // Не выполнится
// if (null || -1 && 1) console.log( 'third' ); // Выполнится

//----------------

let user = prompt("Кто там?", "");

if (user === "Админ") {
  let password = prompt("Пароль?", "");
  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password == null || password == "") {
    alert("Отмена");
  } else alert("Неверный пароль");
} else if (user == null || user == "") {
  alert("Отмена");
} else {
  alert("Я вас не знаю");
}
