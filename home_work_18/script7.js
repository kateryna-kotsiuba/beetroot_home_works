// Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат (если число 123456 
// сдвинуть на 2 цифры, то получится 345612).

let userNumbers = prompt("Введите пятизначное число");
let userNumber2 = +prompt("Введите на сколько вы хотите сдвинуть свое число");


for(let i = userNumber2; i >= 1; i--) {
  let firstLeter = userNumbers.substr(0, 1);
  userNumbers = userNumbers.substr(1) + firstLeter;
}

alert(`Число со сдвигом ${userNumbers}`);