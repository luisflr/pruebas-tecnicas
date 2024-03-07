const fibonacci = (size) => {
  let firstNumber = 0;
  let secondNumber = 1;
  let temp = firstNumber;
  for( let i = 0; i < size; i++) {
    console.log(firstNumber)
    let sum = firstNumber + secondNumber
    temp = secondNumber
    firstNumber = temp
    secondNumber = sum
  }
}

fibonacci(50)