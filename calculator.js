function basicCalculator(operation, firstNumber, secondNumber) {
  let result;
  if (operation === '1') {
    result = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operation === '2') {
    result = parseInt(firstNumber) - parseInt(secondNumber);
  } else if (operation === '3') {
    result = parseInt(firstNumber) * parseInt(secondNumber);
  } else if (operation === '4') {
    result = parseInt(firstNumber) / parseInt(secondNumber);
  } else {
    result = 'invalid input';
  }
  return result;
}

let operationToPerform = prompt(
  'input: \n1 if you want to perform addition operation\n2 if you want to perform subtraction operation\n3 if you want to perform multiplication operation\n4 if you want to perform division operation\n'
);
let firstNumber = prompt('input first number');
let secondNumber = prompt('input second number');

console.log(
  'The result is: ' +
    basicCalculator(operationToPerform, firstNumber, secondNumber)
);
alert(
  'The result is: ' +
    basicCalculator(operationToPerform, firstNumber, secondNumber)
);
