
const alphabeth = {
  A:'·—', B:'—···', C:'—·—·',
  CH:'————', D:'—··', E:'.',
  F:'··—·', G:'——·', H:'····',
  I:'··', J:'·———', K:'—·—',
  L:'·—··', M:'——', N:'—·',
  Ñ:'——·——', O:'———', P:'·——·',
  Q:'——·—', R:'·—·', S:'···',
  T:'—', U:'··—', V:'···—',
  W:'·——', X:'—··—', Y:'—·——',
  Z:'——··',
  0:'—————', 1:'·————', 2:'··———', 3:'···——', 4:'····—', 5:'·····',
  6:'—····', 7:'——···', 8:'———··', 9:'————·',
  '.':'·—·—·—', ',':'——··——', '?':'··——··', '"':'·—··—·', '/':'—··—·',
}

const transformToMorseCode = (char) => {
  const upperString = char.toUpperCase()
  let formatedString = ''
  for ( let i = 0; i < upperString.length; i++) {
    if( upperString[i] === 'C' && upperString[i+1] === 'H') {
      formatedString += `${alphabeth['CH']} `
      i += 2
    }
    else if (upperString[i] === ' ') {
      formatedString += '  '
    } else {
      formatedString += `${alphabeth[upperString[i]]} `
    }
  }
  console.log(formatedString)
}

transformToMorseCode('Hi friends5. c')