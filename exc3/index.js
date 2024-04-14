// Global variabels thats contains players info + board 
let playerColumnn = null
let playerRow = null
let playerOneName = null
let playertwoName = null
let playerOneSign = null
let playerTwoSign = null
let board = []

function timeCalculator(startTime, endTime) {
    let time = null;
    let milliseconds = endTime - startTime;
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (minutes < 1) {
        time = `Game time was ${seconds} seconds`
        return time;
    }
    time = `Game time was ${minutes} minutes and ${seconds} seconds.`;
    return time;
}

function nameChoice1() {
    let playerPrompt = prompt("Player one will be 'X', insert your name: ")
    playerOneName = playerPrompt
    playerOneSign = 'X'
    return null
}

function nameChoice2() {
    let playerPrompt = prompt("Player two will be 'O', insert your name: ")
    playertwoName = playerPrompt
    playerTwoSign = 'O'
    return null
}

function sizeOfBoard() {
    let userSizeChoose = prompt("Please choose the number of rows and cols to play.")
    return userSizeChoose
}

function createBoard(size) {
    for (let row = 0; row < size; row++) {
        let row = []
        for (let item = 0; item < size; item++) {
            row.push("*")
        }
        board.push(row)
    }
    return board
}

function printBoard(board) {
    for (let row of board) {
        console.log(row.join(" | "));
        console.log("-".repeat(row.length * 4 - 2));
    }
}

function isWin(playerName) {
    // Check row wins
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        if (isWinByRow(rowIndex) == true) {
            alert(`Game over ${playerName} Won !`)
            return true
        }
    }
    // Check column wins
    for (let colIndex = 0; colIndex < board.length; colIndex++) {
        if (isWinByColumn(colIndex) == true) {
            alert(`Game over ${playerName} Won !`)
            return true
        }
    }
    // Check diagonal win
    if (isWinByDiagonal(playerName) == true) {
        alert(`Game over ${playerName} Won !`)
        return true
    }
}

function isWinByRow(rowIndex) {
    let firstItem = board[rowIndex][0]
    for (let i = 0; i < board.length; i++) {
        if (firstItem !== board[rowIndex][i]) {
            return false;
        }
        if (firstItem == '*') {
            return false;
        }
    }
    return true
}

function isWinByColumn(colIndex) {
    let firstItem = board[0][colIndex]
    for (let i = 0; i < board.length; i++) {
        if (firstItem !== board[i][colIndex]) {
            return false;
        }
        if (firstItem == '*') {
            return false;
        }
    }
    return true
}

function isWinByDiagonal() {
    // Check from top-left to bottom-right diagonal
    let firstItem = board[0][0];
    for (let i = 1; i < board.length; i++) {
        if (firstItem !== board[i][i]) {
            break;
        }
        if (firstItem == '*') {
            return false;
        }
        if (i === board.length - 1) {
            return true;
        }
    }

    // Check from top-right to bottom-left diagonal
    firstItem = board[0][board.length - 1];
    for (let i = 1; i < board.length; i++) {
        if (firstItem !== board[i][board.length - 1 - i]) {
            break;
        }
        if (firstItem == '*') {
            return false;
        }
        if (i === board.length - 1) {
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '*') {
                return false;
            }
        }
    }
    return true;
}

function enterRow(playerName) {
    promptLoop = false
    while (promptLoop == false) {
        let playerPrompt = prompt(`${playerName}, enter row number please.`)
        if (playerPrompt === null) {
            alert('Operation canceled.');
            return null;
        }
        if (isNaN(playerPrompt)) {
            alert('Please insert a number')
        }
        else if (Number(playerPrompt) < 1 || Number(playerPrompt) > board.length) {
            alert(`Please insert number between 1 - ${board.length}`)
        }
        else {
            playerRow = playerPrompt
            promptLoop = true
            return playerPrompt
        }
    }

}

function enterColumn(playerName) {
    promptLoop = false
    while (promptLoop == false) {
        let playerPrompt = prompt(`${playerName}, enter column number please.`)
        if (playerPrompt === null) {
            alert('Operation canceled.');
            return null;
        }
        if (isNaN(playerPrompt)) {
            alert('Please insert a number')
        }
        else if (Number(playerPrompt) < 1 || Number(playerPrompt) > board.length) {
            alert(`Please insert number between 1 - ${board.length}`)
        }
        else {
            playerColumnn = playerPrompt
            promptLoop = true
            return playerPrompt
        }
    }
}



function checkPlace(rowInput, colInput) {

    if (board[rowInput - 1][colInput - 1] == '*') {
        return true
    }
    else {
        alert("This place is taken");
        return false
    }

}

function makeMove(rowInput, colInput, playerSign) {

    return board[rowInput - 1][colInput - 1] = playerSign
}

function startGame() {
    let startTime = new Date().getTime();
    nameChoice1()
    nameChoice2()
    createBoard(sizeOfBoard())
    while (true) {

        // Player one turn
        let checkPlaceLoop = false
        while (checkPlaceLoop == false) {
            enterRow(playerOneName)
            enterColumn(playerOneName)
            checkPlaceLoop = checkPlace(playerRow, playerColumnn, playerOneSign)
        }
        makeMove(playerRow, playerColumnn, playerOneSign)
        if (isWin(playerOneName) || isDraw() == true) {
            break;
        }
        printBoard(board)

        // Player two turn
        let checkPlaceLoop2 = false
        while (checkPlaceLoop2 == false) {
            enterRow(playertwoName)
            enterColumn(playertwoName)
            checkPlaceLoop2 = checkPlace(playerRow, playerColumnn, playerTwoSign)
        }
        makeMove(playerRow, playerColumnn, playerTwoSign)
        if (isWin(playertwoName) || isDraw() == true) {
            break;
        }
        printBoard(board)
    }
    let endTime = new Date().getTime();
    alert(timeCalculator(startTime, endTime));
}

startGame()
