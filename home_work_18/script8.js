// Зациклить вывод дней недели таким образом: «День недели. 
// Хотите увидеть следующий день?» и так до тех пор, 
// пока пользователь нажимает OK.

let condition = true;
let day = 1;
while (condition) {
    let dayOfWeek = '';
    if (day === 1) {
        dayOfWeek = "Понедельник";
    }
    if (day === 2) {
        dayOfWeek = "Вторник";
    }
    if (day === 3) {
        dayOfWeek = "Среда";
    }
    if (day === 4) {
        dayOfWeek = "Четверг";
    }
    if (day === 5) {
        dayOfWeek = "Пятница";
    }
    if (day === 6) {
        dayOfWeek = "Суббота";
    }
    if (day === 7) {
        dayOfWeek = "Воскресенье";
    }
    
    condition = confirm(`${dayOfWeek}. Хотите увидеть следующий день ?`);
    day++;
    if (day > 7) {
        day = 1;
    }
}