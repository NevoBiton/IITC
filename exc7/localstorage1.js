


function setFromLocalStorage() {
    let userName = document.querySelector("#input-message").value
    localStorage.setItem("name", userName)
}

function getFromLocalStorage() {
    const name = localStorage.getItem("name")
    console.log(`Your name is ${name}`);
}

function removeItem() {
    localStorage.removeItem("name")
}


const KEY = "count-key"
const KEY2 = "count-key2"

const counterFromStorage = localStorage.getItem(KEY)
const counterFromStorage2 = localStorage.getItem(KEY2)

let count = counterFromStorage == null ? 0 : Number(counterFromStorage)
let count2 = counterFromStorage2 == null ? 0 : Number(counterFromStorage2) 


let showCountBoard = document.querySelector("#show-count-board")
let showCountBoard2 = document.querySelector("#show-count-board2")

showCountBoard.innerHTML = count
showCountBoard2.innerHTML = count2

function add1toCount() {
    count++
    localStorage.setItem(KEY, count)
    showCountBoard.innerHTML = count
    
}

function showCount() {
    let showCountBoard = document.querySelector("#show-count-board")
    showCountBoard.innerHTML = count
}

function add2toCount() {
    count2 += 2
    localStorage.setItem(KEY2, count2)
    showCountBoard2.innerHTML = count2
    
}

function showCount2() {
    let showCountBoard2 = document.querySelector("#show-count-board2")
    showCountBoard2.innerHTML = count2
}

console.log(localStorage);


