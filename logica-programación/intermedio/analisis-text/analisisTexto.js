const textAnalysis = (text) => {
  const formatedText = text.replaceAll('\n', ' ')
  const splittedText = formatedText.split(' ') 
  let totalWords = 0
  let lenghtOfWords = 0
  let totalSentences = 0
  let lengthOflargestWord = splittedText[0]
  let largestWord = splittedText[0]
  
  for (let i = 0; i < splittedText.length; i++ ) {
    if (splittedText[i] !== '') {
      totalWords += 1
      if (splittedText[i].includes('.')) {
        const totalDots = (splittedText[i].match(/\./g) || []).length
        lenghtOfWords += splittedText[i].length - totalDots
        totalSentences += 1
        if (lengthOflargestWord.length < splittedText[i].length - totalDots) {
          lengthOflargestWord = splittedText[i].length - totalDots
          largestWord = splittedText[i]
        }
        
      } else {
        lenghtOfWords += splittedText[i].length
        if (lengthOflargestWord.length < splittedText[i].length) {
          lengthOflargestWord = splittedText[i].length
          largestWord = splittedText[i]
        }
      }
    }
  }
  const averageLength = Math.round(lenghtOfWords/splittedText.length)

  console.log({totalWords, averageLength, totalSentences, largestWord, lengthOflargestWord})
}

textAnalysis(`Nos encontramos en un
periodo de guerra civil. Las
naves espaciales rebeldes,
atacando desde una base
oculta, han logrado su 
primera victoria contra
el malvado Imperio
Galáctico.

Durante la batalla, los 
espías rebeldes han
conseguido apoderarse de 
los planos secretos del
arma total y definitiva del
Imperio, la ESTRELLA
DE LA MUERTE,
una estación espacial
acorazada, llevando en sí
potencia suficiente para
destruir a un planeta
entero.

Perseguida por los 
siniestros agentes del 
Imperio, la Princesa Leia 
vuela hacia su patria, a
bordo de su nave espacial,
llevando consigo los
planos robados, que
pueden salvar a su pueblo
y devolver la libertad a la
galaxia....`)