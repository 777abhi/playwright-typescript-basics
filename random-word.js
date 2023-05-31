const words = ['apple', 'banana', 'orange', 'grape', 'melon', 'pear'];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];



console.log('Random word:', randomWord);
console.log('Environment variable RANDOM_WORD:', process.env.RANDOM_WORD);


module.exports = randomWord;
