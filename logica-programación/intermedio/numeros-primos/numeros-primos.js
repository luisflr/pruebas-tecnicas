const primeValidation = (number) => {
  if (number < 2 ) return false
  const divisors = [2,3,5,7]
  if ( divisors.includes(number)) return true
  for (let i = 0; i < divisors.length; i++) {
    if(number % divisors[i] === 0) return false
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