// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

function Calculator() {
  this.read = function () {
    this.firstNum = +prompt("Первое число?", 0);
    this.secondNum = +prompt("Второе число?", 0);
  };
  this.sum = function () {
    return this.firstNum + this.secondNum;
  };
  this.mul = function () {
    return this.firstNum * this.secondNum;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Сумма = " + calculator.sum());
alert("Произведение = " + calculator.mul());
