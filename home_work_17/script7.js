// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let sum = prompt('Введите ссуму покупки.');
if(sum >= 200 && sum < 300) {
  let result = sum -((sum / 100) * 3);
  alert(`Ваша сумма к оплате со скидкой 3% - ${result}`);
}

if(sum >= 300 && sum < 500) {
  let result = sum -((sum / 100) * 5);
  alert(`Ваша сумма к оплате со скидкой 5% - ${result}`);
}

if(sum >= 500) {
  let result = sum -((sum / 100) * 7);
  alert(`Ваша сумма к оплате со скидкой 7% - ${result}`);
}