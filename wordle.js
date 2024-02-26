
// get list of all 5 letter words
const allWords = require('./words');

// has these letters
const hasLetters = ['r','a','p']; 

// must not has these letters
const mustNotHaveLetters = ['e','d','y','c','m','s','h'];

// must have selected letters in these positions
const mustHaveLettersInPosition = [,,'a',,]

// not in these positions
const mustNotHaveLettersInPosition = ['r','r',,,'p']

// sampai sini, try to get the word 'apart' ==> kalau ubah huruf(array) atas tu lain la word yang nak capture
// simplify the functions (part 2) ==> use !

const containsLetter = (word, letter) => {
  return word.includes(letter);
}

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
}

const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
  mustNotHaveLetters.every(letter => !containsLetter(word, letter)) &&
  mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
  mustNotHaveLettersInPosition.every((letter, index) => !hasLetterInPosition(word, letter, index))
})

console.log(filteredWords);
console.log('possible words', filteredWords.length);