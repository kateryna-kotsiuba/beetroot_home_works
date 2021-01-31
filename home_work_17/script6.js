// Написать конвертор валют. Пользователь вводит количество USD, 
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую сумму.

let usd = prompt('Сколько вы хотите обменять USD?');
let currency = prompt('На какую валюту вы хотите обменять: EUR, UAN или AZN?' );
console.log(usd);
console.log(currency);
let eurCurs = 1.5;
let uanCurs = 28;
let aznCurs = 20; 
if(currency.toUpperCase() == 'EUR') {
  alert(`Получите ваши ${usd * eurCurs}`);
}
else if(currency.toUpperCase() == 'UAN') {
  alert(`Получите ваши ${usd * uanCurs}`);
}
else if(currency.toUpperCase() == 'AZN') {
  alert(`Получите ваши ${usd * aznCurs}`);
}
else {
  alert('Такой валюты нету');
}
