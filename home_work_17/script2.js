// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
//  который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = prompt('Напишите число от 0 до 9');
alert(simbol(number));



function simbol(number) {
  const yourSimbol = 'Ваш символ';
  if(number == 0) {
    return `${yourSimbol}: )`;
  }

  else if(number == 1) {
    return `${yourSimbol}: !`;
  }

  else if(number == 2) {
    return `${yourSimbol}: @`;
  }

  else if(number == 3) {
    return `${yourSimbol}: #`;
  }

  else if(number == 4) {
    return `${yourSimbol}: $`;
  }

  else if(number == 5) {
    return `${yourSimbol}: %`;
  }

  else if(number == 6) {
    return `${yourSimbol}: ^`;
  }

  else if(number == 7) {
    return `${yourSimbol}: &`;
  }

  else if(number == 8) {
    return `${yourSimbol}: *`;
  }

  else if(number == 9) {
    return `${yourSimbol}: (`;
  }

  else {
    return 'Вы ввели некорректное значение!'
  }
}