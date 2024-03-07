const fibonacci = (size) => {
  let firstNumber = 0;
  let secondNumber = 1;
  for( let i = 0; i < size; i++) {
    console.log(firstNumber)
    let sum = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = sum
  }
}

fibonacci(50)