// exc1

// const elemAnswerDiv = document.querySelector('div')
// const elemSuccsesButton = document.querySelector('.succses-button')
// const elemFailureButton = document.querySelector('.failure-button')

// let myPromise = new Promise((resolve, reject) => {
//     resolve("Succses")
//     reject("Failure")
// })

// function promiseSuccsesFunc() {
//     myPromise.then((val) => {console.log(val);})    
// }

// exc4


const resolveHandler = (val) => ElemResultDiv.innerHTML = val ;
const rejectHandler = (err) => ElemResultDiv.innerHTML = err ;
const ElemResultDiv = document.querySelector('.answer-div')
const elemInput = document.querySelector('.user-input')


function isEvenAsync(val) {
    const myPromise = new Promise((resolve, reject) => {
        if (Number(val)) {
            resolve(`${val % 2 == 0}`)
        }
        else {
            reject("invalid action")
        }
    });
    return myPromise;
}

function submitUserReq() {
    let userNumber = elemInput.value
    isEvenAsync(userNumber).then(resolveHandler).catch(rejectHandler)
}

let myArray = [1,2,3,4,0]

function minArrayAsync(array) {
    const myProm = new Promise((resolve, reject) => {
        if (checkIfArrayJustNums(array)) {
            resolve(returnTheMinNum(array))
        }
        else {
            reject("Invalid Array")
        } 
    })
    return myProm
}

function returnTheMinNum(array) {
    let minNum = array[0]
    for (const i of array) {
        if (i < minNum) {
            minNum = i
        }
    }
    return minNum
}

function checkIfArrayJustNums(array) {
    for (const i of array) {
        if (typeof i == "string") {
            return false
        }
    }
    if (array.length < 1) {
        return false
    }
    else {
        return true
    }
}

function submitArrayReq() {
    minArrayAsync(myArray).then((res) => {ElemResultDiv.innerHTML = res}).catch((err) => {ElemResultDiv.innerHTML = err})
    console.log(myArray);
}



