console.log(parseInt(Math.random() * 100 + 1));
let randomNo = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('.guessField');
const submit = document.querySelector('.guessSubmit');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const remaining = document.querySelector('.lastResult');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;

let playGame = true; // this is very important when you are making any game 

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

// to check validity of the input number 
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than 101');
    }
    // valid h number then pushed in prevGuess
    else {
        prevGuess.push(guess);

        // to check game over condition
        if (numOfGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random no was ${randomNo}`);
            endGame();
        }
        // agar game over nhi h to
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNo) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNo) {
        displayMessage(`Number is TOO Low`);
    } else if (guess > randomNo) {
        displayMessage(`Number is TOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = ''; // clean up 
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numOfGuess}`;
    numOfGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNo = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
