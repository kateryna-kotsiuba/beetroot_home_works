// Запросить у пользователя трехзначное число и проверить, 
// есть ли в нем одинаковые цифры.

let number = prompt('Введите трехзначное число.');
console.log(number);
let number1 = number.substr(0, 1);
console.log('это 1е число >>>', number1);
let number2 = number.substr(1, 1);
console.log('это 2е число >>>', number2);
let number3 = number.substr(2, 1);
console.log('это 3е число >>>', number3);

if(number1 == number2 && number1 == number3) {
  alert('Все цифры одинаковые');
}

else if(number1 == number2) {
  alert('Первая и вторая цифра одинаковые');
}
else if(number1 == number3) {
  alert('Первая и третья цифра одинаковые');
}
else if(number2 == number3) {
  alert('Вторая и третья цифра одинаковые');
}
else {
  alert('Все цифры разные');
}