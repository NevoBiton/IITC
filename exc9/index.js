// exc 1

let time = 0
let myInterval1 = setInterval(function () {console.log(time += 1);}, 1000);

function continueTime() {
    myInterval1 = setInterval(function () {console.log(time += 1);}, 1000);
}


// exc 2

const elemSortedArrayDiv = document.querySelector('.sorted-array-div')
let myArray = [1,5,7,2,3,4]
myArray.sort()
let index = 0
let myInterval;

function printArrayWithDelay() {
   if (index < myArray.length) {
    elemSortedArrayDiv.innerHTML += myArray[index] + " ";
    index++;
   }
   else {
    clearInterval(myInterval)
   }
}

function startPrint() {
    myInterval = setInterval(printArrayWithDelay, 1000)
}

// exc 3 

const elemHelloWorldDiv = document.querySelector('.hello-world-div')

function printHelloWorld() {
    elemHelloWorldDiv.innerHTML = "<h1> Hello World </h1>"
}

function delayPrintHelloWorld() {
    const myTimeout = setTimeout(printHelloWorld, 3000);
}



