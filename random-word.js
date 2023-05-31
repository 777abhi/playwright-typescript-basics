const words = ['apple', 'banana', 'orange', 'grape', 'melon', 'pear'];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];

process.env.RANDOM_WORD = randomWord;

console.log('Random word:', randomWord);
