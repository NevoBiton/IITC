let clickCounter = 0
let unClicked = true
let firstDiv = undefined
let currentImgSource = undefined
let cardsFoundsCount = 0
let boardSize = 8
let doubleArray = undefined

let photosArray = [
    "Photos/milan.png",
    "Photos/barcelona.png",
    "Photos/hapoel.png",
    "Photos/roma.png",
    "Photos/chelsea.png",
    "Photos/arsenal.png",
    "Photos/sevilla.png",
    "Photos/tottenham.png",
    "Photos/stoke_city.png",
    "Photos/valencia.png",
    "Photos/psv.png",
    "Photos/napoli.png",
    "Photos/lyon.png",
    "Photos/strasbourg.png",
    "Photos/liverpool.png",
];


const boardContainer = document.querySelector('.board-container');

function changeBoardSize(number) {
    boardSize = number
    console.log(boardSize);
    if (boardSize === 15) {
        boardContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr"
        boardContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr"
    }
    else if (boardSize === 6) {
        boardContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        boardContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr"
    }
    else if (boardSize === 10) {
       boardContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr"
        boardContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr" 
    }
    else if (boardSize === 8) {
        boardContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
         boardContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr" 
     }
    
    return boardSize
}

function shuffleArray() {
    let slicedArray = photosArray.slice(0,boardSize)
    doubleArray = slicedArray.concat(slicedArray)

    for (let i = doubleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = doubleArray[i];
        doubleArray[i] = doubleArray[j];
        doubleArray[j] = temp;
    }
    return doubleArray;
}

function generateRandomPhotos(number) {
    changeBoardSize(number)
    boardContainer.innerHTML = ""
    const shuffledArray = shuffleArray()
    for (const photo of shuffledArray) {

        let div = document.createElement('div');
        div.classList.add('card');
        let img = document.createElement('img');
        img.src = photo;
        div.appendChild(img);
        div.addEventListener("click", () => {
            if (unClicked === true) {
                firstDisplayToggle(div);
            }
            else {
                secondDisplayToggle(div);
            }});
        boardContainer.appendChild(div);
    }
}

function firstDisplayToggle(clickedDiv) {
    if (clickedDiv.classList.contains('revealed') === false && clickCounter < 2) {
    currentImgSource = clickedDiv.querySelector('img').src
    unClicked = false
    firstDiv = clickedDiv
    clickedDiv.classList.toggle('revealed')
    clickCounter++
    }
}

function secondDisplayToggle(clickedDiv) {
    if (clickedDiv.classList.contains('revealed') === false && clickCounter < 2) {
    unClicked = true
    clickedDiv.classList.toggle('revealed')
    clickCounter++
    setTimeout(function() {
        isSame(clickedDiv);
    }, 1000);
}
}

function isSame(clickedDiv) {
    clickCounter = 0
    if (currentImgSource == clickedDiv.querySelector('img').src) {
        cardsFoundsCount++
        isWin()
        
    }
    else {
        clickedDiv.classList.toggle('revealed')
        firstDiv.classList.toggle('revealed')
    }
}

function isWin() {
    if (cardsFoundsCount == doubleArray.length / 2) {
        let elemWinMessage = document.querySelector('.winning-message')
        elemWinMessage.innerHTML += "<h2>Well played!</h2>"
    }
}

generateRandomPhotos(boardSize);




