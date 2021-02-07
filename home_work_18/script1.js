// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let number1 = prompt('Введите любое число');
let number2 = prompt('Введите еще одно число, больше первого');
let result = 0;
let iterator = Number(number1);


do {
  result += iterator;
  iterator ++;
} while (iterator <= Number(number2));
alert(`Сумма чисел в диапазоне от ${number1} до ${number2} = ${result}`);