// Запросить 2 числа и найти только наибольший общий делитель.

const numberOne = +prompt("Введите число");
const numberTwo = +prompt("Введите второе число больше первого");
const divider = numberTwo;



while (numberOne % divider === 0 && numberTwo % divider === 0) {
  console.log(divider);
  divider--;
}


alert(`Наибольший общий делитель для чисел - ${divider}`);



