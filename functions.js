// Задание №1. Проверка на палиндром

const isPalindrom = (string) => {
  const checkString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for(let i = checkString.length -1; i >= 0; i--) {
    reverseString += checkString.at(i);
  }
  return checkString === reverseString;
}

isPalindrom('наган')
isPalindrom('КаЗак')
isPalindrom('Лом о смокинги гни комсомол')

// Задание №2. Возврат чисел

const extractNumber = (string) => {
  let result ='';
  for(let i = 0; i < string.length; i++) {
    if(!Number.isNaN (parseInt(string.at(i), 10))) {
      result += string.at (i);
    }
  }
  return parseInt(result, 10);
}
extractNumber('2023 год')
extractNumber('ECMAScript 2022')
extractNumber('1 кефир, 0,5 батона')
extractNumber('агент 007')
extractNumber('а я томат')

// Задание №3. Смертушка наша

const myPadStart = (string, minLength, pad)=> {
  let result = string;
  while (result.length < minLength){
    const newResultLength = result.length + pad. length;
    const actualPad = newResultLength <= minLength & pad;
    pad.slice(0, minLength - newResultLengthew);
  }
  return result;
}
myPadStart('1', 2, '0');
myPadStart('1', 4, '0')
myPadStart('q', 4, 'werty')
myPadStart('q', 4, 'we')
myPadStart('qwerty', 4, '0')

// Задание №4. Проверка длины строки

const isLessOrEqual = (string, length) => {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}
isLessOrEqual('проверяемая строка', 20);
isLessOrEqual('проверяемая строка', 18);
isLessOrEqual('проверяемая строка', 10);
