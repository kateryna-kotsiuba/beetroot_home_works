// Запросить у пользователя число и вывести все делители этого числа.

const number = +prompt("Введите число");

for (let i = number; i >= 1; i-- ) {

    if (number % i === 0) {
        alert(i);
    }

}