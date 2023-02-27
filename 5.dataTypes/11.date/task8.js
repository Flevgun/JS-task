// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let currentDate = new Date() - date;

  if (currentDate < 1000) {
    return "прямо сейчас";
  }
  let sec = Math.floor(currentDate / 1000);
  if (sec < 60) {
    return `${sec} сек. назад`;
  }
  let min = Math.floor(sec / 60);
  if (min < 60) {
    return `${min} сек. назад`;
  }
  let newDate = date;
  newDate = [
    "0" + newDate.getDate(),
    "0" + (newDate.getMonth() + 1),
    "" + newDate.getFullYear(),
    "0" + newDate.getHours(),
    "0" + newDate.getMinutes(),
  ].map((part) => part.slice(-2));
  return `${newDate.slice(0, 3).join(".")} ${newDate.slice(3).join(":")}`;
}
