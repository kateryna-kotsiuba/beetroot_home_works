// Запросить у пользователя 10 чисел и подсчитать, 
// сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. Учтите, что достаточно 
// одной переменной (не 10) для ввода чисел пользователем.

const enterDigits = prompt("Введите 10 чисел используя запятую");
let digitArr = enterDigits.split(",+");
let positive = 0;
let negative = 0;
let zeros = 0;
let odd = 0;
let even = 0;
for (let digit of digitArr) {
    digit = Number(digit);
    if (digit === 0) {
        zeros++;
        continue;
    }
    if (digit % 2 === 0) {
        even++;
    } else {
        odd++;
    }
    if (digit < 0) {
        negative++;
    } else {
        positive++;
    }
}
alert("Odds: " + odd + "\nEvens " + even + "\nZeros " + zeros + "\nNegatives " + negative + "\nPositives " + positive);