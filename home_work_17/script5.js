// Запросить у пользователя пятиразрядное число и определить,
// является ли оно палиндромом.

let number = prompt('Введите пятизначное число.');
if(number[0] == number[4] && number[1] == number[3]) {
  alert('Это палиндром');
}
else {
  alert('Это не палиндром');
}