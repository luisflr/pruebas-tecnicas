const wordCounter = (text = '') => {
  const counterArray = [{
    word: '',
    counter: 0
  }]
  const counterTemp = []
  const newText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  const textSplited = newText.split(" ")
  for (let i = 0; i < textSplited.length; i++) { 
    if (counterTemp.includes(textSplited[i])) {
      const getIndex = counterArray.findIndex(word => word.word === textSplited[i])
      console.log(textSplited[i])
      console.log(counterArray.findIndex(word => word.word === textSplited[i]))
      counterArray[getIndex].counter += 1 
    } else {
      counterArray.push({
        word: textSplited[i],
        counter: 1
      })
    }
    counterTemp.push(textSplited[i])
  }
  counterArray.shift()
  return counterArray
}

wordCounter('hola a todos, amigos mios, los quiero a todos ustede amigos son todos geniales.')
