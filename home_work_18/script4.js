// Определить количество цифр в введенном числе.

let number = prompt('Введите любое число');
let countOfNumbers = 0;

for (let i = 1; i <= number.length; i++) {
  countOfNumbers ++;
}
alert(`В вашем числе ${countOfNumbers} цифр`);