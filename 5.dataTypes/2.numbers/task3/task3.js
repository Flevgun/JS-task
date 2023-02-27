function readNumber(){
    let num 

    do {
       num = +prompt('Введите число!', 0) 
    } while (num == null || num == '');
    return num
}

alert(`Число: ${readNumber()}`)