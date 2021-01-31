// Запросить дату (день, месяц, год) и вывести следующую за ней дату.
// Учтите возможность перехода на следующий месяц, год, а также 
// високосный год.

let day = prompt('Введите день');
let month = prompt('Введите месяц');
let year = prompt('Введите год');
let leapYear = (year % 400 === 0 || year % 4 === 0) && year % 100 !== 0;

if (day <= 31 && month <=12) {
  if (leapYear && month === 02 && day === 29) {
    alert(`01.${month + 1}.${year}`)
  } else if (day === 31 && month !== 12) {
    alert(`01.${month + 1}.${year}`)
  } else if (day === 31 && month === 12) {
    alert(`01.01.${year + 1}`)
  } else {
    alert(`${+day + 1}.${month}.${year}`)
  } 
} 