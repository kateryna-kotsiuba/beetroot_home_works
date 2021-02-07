// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, 
// решить пример, вывести результат и спросить, хочет ли он решить 
// еще один пример. И так до тех пор, пока пользователь не откажется.
let condition = true;

while (condition) {
  const number1 = prompt("Введите первое число");
  const number2 = prompt("Введите второе число");
  const sign = prompt("Введите знак");
  alert(eval(number1 + sign + number2));
  condition = confirm("Хотите продолжить?");
}