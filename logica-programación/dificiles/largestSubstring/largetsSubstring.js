const kUniqueCharacters = (string, number) => {
  const arrayOfSubstrings = [];

  let iterator = 1;
  let substring = '';
  let characters = 0;

  for (let i = 0; i < string.length; i++) {
    if(!substring.split('').includes(string[i])) {
      characters++
      arrayOfSubstrings.push(substring)
    }
    else if ( characters === number + 1) {
      characters = 0
      substring = ''
      iterator++
      i = iterator;
    }
    substring = substring + string[i]
  }

  let largestSubstring = arrayOfSubstrings[0]
  for (let j = 1; j < arrayOfSubstrings.length; j++) {
    if (arrayOfSubstrings[j].length > largestSubstring.length) largestSubstring = arrayOfSubstrings[j]
  }

  return largestSubstring
}

console.log(kUniqueCharacters('aabbcbbce', 3))