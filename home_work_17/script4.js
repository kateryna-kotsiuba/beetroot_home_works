// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не 
// кратен 100.

let year = prompt('Введите ваш год');
console.log('Ваш год', year);
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  alert('Ваш год высокосный');
}
else {
  alert('Ваш год не высокосный');
}
