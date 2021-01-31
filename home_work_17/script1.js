// Запросить у пользователя его возраст и определить, кем он является:
// ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером
// (60– ...).

let age = prompt('Сколько тебе лет?');
alert(ageAnswer(age));


function ageAnswer(number) {
  if(number >= 0 && number <= 12) {
    return 'Ты ребенок!';
  }

  else if(number > 12 && number <= 18) {
    return 'Ты подросток!'
  }

  else if(number > 18 && number <= 60) {
    return 'Ты взрослый!'
  }

  else if(number > 60 && number <= 100) {
    return 'Ты пенсионер!'
  }

  else {
    return 'Ты ввел не корректное значение!'
  }
}
