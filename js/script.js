const words = [
    // Programming
    { word: 'javascript', category: 'Programming' },
    { word: 'python', category: 'Programming' },
    { word: 'java', category: 'Programming' },
    { word: 'typescript', category: 'Programming' },
    { word: 'ruby', category: 'Programming' },
    { word: 'csharp', category: 'Programming' },
    { word: 'php', category: 'Programming' },
    { word: 'swift', category: 'Programming' },
    { word: 'kotlin', category: 'Programming' },
    { word: 'scala', category: 'Programming' },
    
    // Web Development
    { word: 'react', category: 'Web Development' },
    { word: 'angular', category: 'Web Development' },
    { word: 'vue', category: 'Web Development' },
    { word: 'nodejs', category: 'Web Development' },
    { word: 'express', category: 'Web Development' },
    { word: 'django', category: 'Web Development' },
    { word: 'flask', category: 'Web Development' },
    { word: 'laravel', category: 'Web Development' },
    { word: 'jquery', category: 'Web Development' },
    { word: 'bootstrap', category: 'Web Development' },
    
    // Countries
    { word: 'france', category: 'Country' },
    { word: 'brazil', category: 'Country' },
    { word: 'australia', category: 'Country' },
    { word: 'canada', category: 'Country' },
    { word: 'japan', category: 'Country' },
    { word: 'germany', category: 'Country' },
    { word: 'italy', category: 'Country' },
    { word: 'spain', category: 'Country' },
    { word: 'mexico', category: 'Country' },
    { word: 'india', category: 'Country' },
    
    // Cities
    { word: 'tokyo', category: 'City' },
    { word: 'paris', category: 'City' },
    { word: 'newyork', category: 'City' },
    { word: 'london', category: 'City' },
    { word: 'dubai', category: 'City' },
    { word: 'singapore', category: 'City' },
    { word: 'berlin', category: 'City' },
    { word: 'rome', category: 'City' },
    { word: 'moscow', category: 'City' },
    { word: 'sydney', category: 'City' },
    
    // Animals
    { word: 'elephant', category: 'Animal' },
    { word: 'giraffe', category: 'Animal' },
    { word: 'penguin', category: 'Animal' },
    { word: 'kangaroo', category: 'Animal' },
    { word: 'dolphin', category: 'Animal' },
    { word: 'tiger', category: 'Animal' },
    { word: 'lion', category: 'Animal' },
    { word: 'panda', category: 'Animal' },
    { word: 'koala', category: 'Animal' },
    { word: 'cheetah', category: 'Animal' },
    
    // // Musical Instruments
    { word: 'guitar', category: 'Musical Instrument' },
    { word: 'piano', category: 'Musical Instrument' },
    { word: 'violin', category: 'Musical Instrument' },
    { word: 'drums', category: 'Musical Instrument' },
    { word: 'saxophone', category: 'Musical Instrument' },
    { word: 'flute', category: 'Musical Instrument' },
    { word: 'trumpet', category: 'Musical Instrument' },
    { word: 'harp', category: 'Musical Instrument' },
    { word: 'clarinet', category: 'Musical Instrument' },
    { word: 'accordion', category: 'Musical Instrument' },
    
    // Chemistry
    { word: 'oxygen', category: 'Chemistry' },
    { word: 'hydrogen', category: 'Chemistry' },
    { word: 'carbon', category: 'Chemistry' },
    { word: 'nitrogen', category: 'Chemistry' },
    { word: 'sodium', category: 'Chemistry' },
    { word: 'chlorine', category: 'Chemistry' },
    { word: 'helium', category: 'Chemistry' },
    { word: 'potassium', category: 'Chemistry' },
    { word: 'calcium', category: 'Chemistry' },
    { word: 'iron', category: 'Chemistry' },
    
    // Astronomy
    { word: 'planet', category: 'Astronomy' },
    { word: 'galaxy', category: 'Astronomy' },
    { word: 'comet', category: 'Astronomy' },
    { word: 'nebula', category: 'Astronomy' },
    { word: 'asteroid', category: 'Astronomy' },
    { word: 'supernova', category: 'Astronomy' },
    { word: 'quasar', category: 'Astronomy' },
    { word: 'constellation', category: 'Astronomy' },
    { word: 'telescope', category: 'Astronomy' },
    { word: 'satellite', category: 'Astronomy' },
    
    // Sports
    { word: 'football', category: 'Sports' },
    { word: 'tennis', category: 'Sports' },
    { word: 'basketball', category: 'Sports' },
    { word: 'swimming', category: 'Sports' },
    { word: 'volleyball', category: 'Sports' },
    { word: 'cricket', category: 'Sports' },
    { word: 'hockey', category: 'Sports' },
    { word: 'rugby', category: 'Sports' },
    { word: 'gymnastics', category: 'Sports' },
    { word: 'athletics', category: 'Sports' },
    
    // Food
    { word: 'pizza', category: 'Food' },
    { word: 'sushi', category: 'Food' },
    { word: 'pasta', category: 'Food' },
    { word: 'burger', category: 'Food' },
    { word: 'taco', category: 'Food' },
    { word: 'curry', category: 'Food' },
    { word: 'sashimi', category: 'Food' },
    { word: 'risotto', category: 'Food' },
    { word: 'paella', category: 'Food' },
    { word: 'croissant', category: 'Food' },
    
    // Movies
    { word: 'avatar', category: 'Movies' },
    { word: 'inception', category: 'Movies' },
    { word: 'titanic', category: 'Movies' },
    { word: 'matrix', category: 'Movies' },
    { word: 'godfather', category: 'Movies' },
    { word: 'interstellar', category: 'Movies' },
    { word: 'gladiator', category: 'Movies' },
    { word: 'casablanca', category: 'Movies' },
    { word: 'psycho', category: 'Movies' },
    { word: 'jaws', category: 'Movies' }
];

let selectedWord = '';
let selectedCategory = '';
let guessedLetters = [];
let remainingAttempts = 6;
let countdownTimer;
let score = 0;
let streak = 0;
let hintUsed = false;

const wordDisplayElement = document.getElementById('word-display');
const guessInputElement = document.getElementById('guess-input');
const guessButtonElement = document.getElementById('guess-button');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const categoryElement = document.getElementById('category');
const hintButtonElement = document.getElementById('hint-button');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const skipButtonElement = document.getElementById('skip-button');
const darkModeToggleElement = document.getElementById('dark-mode-toggle');

function initializeGame() {
    clearTimeout(countdownTimer);
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    selectedCategory = words[randomIndex].category;
    guessedLetters = [];
    remainingAttempts = 6;
    hintUsed = false;
    updateWordDisplay();
    updateMessage('');
    updateAttempts();
    updateCategory();
    updateScore();
    updateStreak();
    guessButtonElement.disabled = false;
    guessInputElement.disabled = false;
    hintButtonElement.disabled = false;
    skipButtonElement.disabled = false;
}

function updateWordDisplay() {
    wordDisplayElement.textContent = selectedWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
}

function updateMessage(message) {
    messageElement.textContent = message;
}

function updateAttempts() {
    attemptsElement.textContent = remainingAttempts;
}

function updateCategory() {
    categoryElement.textContent = selectedCategory;
}

function updateScore(points = 0) {
    score += points;
    scoreElement.textContent = score;
}

function updateStreak() {
    streakElement.textContent = streak;
}

function startCountdown(seconds) {
    messageElement.classList.add('countdown');
    updateMessage(`New game starting in ${seconds} seconds...`);
    if (seconds > 0) {
        countdownTimer = setTimeout(() => startCountdown(seconds - 1), 1000);
    } else {
        messageElement.classList.remove('countdown');
        initializeGame();
    }
}

function endGame(message) {
    updateMessage(message);
    guessButtonElement.disabled = true;
    guessInputElement.disabled = true;
    hintButtonElement.disabled = true;
    skipButtonElement.disabled = true;
    if (message.includes('Congratulations')) {
        updateScore(calculateScore());
        streak++;
        } else {
        streak = 0;
    }
    updateStreak();
    startCountdown(2);
}

function calculateScore() {
    let baseScore = selectedWord.length * 10;
    if (!hintUsed) baseScore *= 2;
    return baseScore + (remainingAttempts * 5);
}

function guessLetter() {
    const guess = guessInputElement.value.toLowerCase();
    guessInputElement.value = '';

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        updateMessage('Please enter a single letter.');
        return;
    }

    if (guessedLetters.includes(guess)) {
        updateMessage('You already guessed that letter.');
        return;
    }

    guessedLetters.push(guess);

    if (selectedWord.includes(guess)) {
        updateWordDisplay();
        if (!wordDisplayElement.textContent.includes('_')) {
            endGame(`Congratulations! You guessed the word "${selectedWord}"!`);
        } else {
            updateMessage('Good guess!');
        }
    } else {
        remainingAttempts--;
        updateAttempts();
        updateMessage('Wrong guess. Try again!');
        if (remainingAttempts === 0) {
            endGame(`Game over! The word was "${selectedWord}".`);
        }
    }
}

function getHint() {
    const unguessedLetters = selectedWord
        .split('')
        .filter(letter => !guessedLetters.includes(letter));
    
    if (unguessedLetters.length === 0) {
        updateMessage('No more hints available!');
        return;
    }

    const hintLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
    guessedLetters.push(hintLetter);
    updateWordDisplay();
    updateMessage(`Hint: The letter "${hintLetter}" has been revealed.`);
    hintUsed = true;
    hintButtonElement.disabled = true;

    if (!wordDisplayElement.textContent.includes('_')) {
        endGame('Congratulations! You guessed the word with a hint!');
    }
}

function skipWord() {
    streak = 0;
    updateStreak();
    endGame(`You skipped the word. It was "${selectedWord}".`);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

guessButtonElement.addEventListener('click', guessLetter);
guessInputElement.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        guessLetter();
    }
});
hintButtonElement.addEventListener('click', getHint);
skipButtonElement.addEventListener('click', skipWord);
darkModeToggleElement.addEventListener('click', toggleDarkMode);

initializeGame();