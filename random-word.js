const core = require('@actions/core');

const words = ['apple', 'banana', 'orange', 'grape', 'melon', 'pear'];
const randomIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomIndex];

core.setOutput('RANDOM_WORD', randomWord);
