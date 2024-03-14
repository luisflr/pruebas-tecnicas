const binaryNumber = []
const convertDecimalToBinary = (decimalNumber) => {
  if (decimalNumber === 1 ) {
    binaryNumber.push(1)
    return;
  }
  const residuo = decimalNumber % 2
  decimalNumber = Math.floor(decimalNumber / 2)
  binaryNumber.push(residuo)
  convertDecimalToBinary(decimalNumber)
}

convertDecimalToBinary(172)

console.log(binaryNumber.reverse().join(''))