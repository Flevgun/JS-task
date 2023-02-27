// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
  let now = new Date();
  let next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let dif = next - now
  return Math.round(dif/1000)
}

console.log(getSecondsToTomorrow())
