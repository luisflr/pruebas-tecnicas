const differentStrings = (firstString, secondString) => {
  const firtsOuput = firstString.split('').filter(char => !secondString.includes(char))
  const secondOutput = secondString.split('').filter(char => !firstString.includes(char)) 

  return {
    firtsOuput: firtsOuput.join(''),
    secondOutput: secondOutput.join('')
  }
}

console.log(differentStrings('abba','cbad'))