// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  let newStr = str.toLowerCase();

  return newStr.includes("viagra") || newStr.includes("xxx");
}

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;
