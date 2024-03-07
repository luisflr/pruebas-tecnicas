const anagrama = (firstWord, secondWord) => {
  if ( typeof firstWord !== 'string' || typeof secondWord !== 'string') {
    return console.log('Las dos palabras debe ser string');
  }
  const formatedFirstWord = firstWord.replaceAll(' ', '').toLowerCase()
  const formatedSecondWord = secondWord.replaceAll(' ', '').toLowerCase()
  let temFormatedSecondWord = formatedSecondWord

  const firstValidations = validations(formatedFirstWord, formatedSecondWord)

  if (!firstValidations) {
    console.log('No es un anagrama'); 
    return
  }
  
  for ( let i = 0; i < formatedSecondWord.length; i++ ) {
    if( !formatedSecondWord.includes(formatedFirstWord[i]) ) {
      return console.log('No es un anagrama');
    }
    temFormatedSecondWord = temFormatedSecondWord.slice(1,temFormatedSecondWord.length + 1)
  }
  return console.log('Es un anagrama');
  
}

const validations = (firstWord, secondWord) => {
  if (firstWord === secondWord) {
    return false
  }
  else if (firstWord.length !== secondWord.length){
    return false
  }
  return true
}


anagrama('Toledo','El todo')