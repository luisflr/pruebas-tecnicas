const obstacleRace = (instructions, race) => {
  const lengthInstructions = instructions.length
  const lengtRace = race.length
  let finalRace = ''
  if ( lengthInstructions != lengtRace ) return ''
  for( let i = 0; i < lengthInstructions; i++) {
    if(instructions[i]  === 'jump' && race[i] === '_') finalRace += 'x'
    else if ( instructions[i] === 'run' && race[i] === '|') finalRace += '/'
    else finalRace += race[i]
  }
  return finalRace
}

console.log(obstacleRace([
  'jump', 'run', 'run', 
  'run', 'run', 'run', 
  'jump', 'jump', 'run', 
  'jump', 'run'],
  '_|_|__|_|__'))

