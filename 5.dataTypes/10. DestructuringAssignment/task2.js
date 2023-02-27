// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let sum = 0;
  let currentName = "";
  for (const [name, salary] of Object.entries(salaries)) {
    if (sum < salary) {
      sum = salary;
      currentName = name;
    }
  }
  return currentName;
}
console.log(topSalary(salaries));
