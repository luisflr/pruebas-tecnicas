const primeValidation = (number) => {
  if (number < 2 ) return false
  for (let i = 2; i < number - 1; i++) {
    if(number % i === 0) return false
  }
  return true
}

const hundredFirstNumbers = () => {
  const primeNumbers = []
  for(let i = 2; i < 100; i++) {
    if (primeValidation(i)) primeNumbers.push(i)
  }
  console.log(primeNumbers)
}
hundredFirstNumbers()