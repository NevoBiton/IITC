let computerRandomNumber = [];
let userGuess = [];

let elemInput1 = document.querySelector('.input-1');
let elemInput2 = document.querySelector('.input-2');
let elemInput3 = document.querySelector('.input-3');
let elemInput4 = document.querySelector('.input-4');
let elemHistoryGuesses = document.querySelector('.history-guesses')

function generateComputerRandomNumber() {
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!computerRandomNumber.includes(randomNumber)) {
            computerRandomNumber.push(randomNumber);
        } else {
            i--;
        }
    }
}

function isValidGuess() {
    const userGuessArray = [elemInput1.valueAsNumber, elemInput2.valueAsNumber, elemInput3.valueAsNumber, elemInput4.valueAsNumber];
    const uniqueGuessSet = new Set(userGuessArray);
    if (uniqueGuessSet.size < 4) {
        alert("Cannot enter duplicates");
        return false;
    }
    for (let i of uniqueGuessSet) {
        if (i > 9) {
            alert("Cannot enter number above 9")
            return false;
        }
    }
    return true;
}

function checkGuess() {
    userGuess = [elemInput1.valueAsNumber, elemInput2.valueAsNumber, elemInput3.valueAsNumber, elemInput4.valueAsNumber];
    if (!isValidGuess()) {
        return;
    }

    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (userGuess[i] === computerRandomNumber[i]) {
            bulls++;
        } else if (computerRandomNumber.includes(userGuess[i])) {
            cows++;
        }
    }

    elemHistoryGuesses.innerHTML += `<div class="computer-guess history-guesses">
    <div class="computer-guessed-numbers">
        <p>${userGuess[0]}</p><p>${userGuess[1]}</p><p>${userGuess[2]}</p><p>${userGuess[3]}</p>
    </div>
    <div>
     <span class="bulls">Bulls = ${bulls}</span> <span class="cows">Cows = ${cows}</span>
    </div>
    </div>`

    if (bulls === 4) {
        let userNumberGuess = document.querySelector('.user-number-guess')
        elemHistoryGuesses.innerHTML += `<div class="winning-message"> <h2>You Won !</h2> </div>`
        userNumberGuess.style.display = 'none'
    }

}

generateComputerRandomNumber()
console.log(computerRandomNumber);




