const invertString = (string) => {
  const invertedString = []
  for (let i = string.length - 1; i >= 0 ; i--) {
    invertedString.push(string[i])
  }
  return invertedString.join('');
}

console.log(invertString('odnum aloH'))