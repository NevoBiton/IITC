

// function sortArray(array) {
//     let tempdArr = array
//     let sortedArray = [];

//     while (tempdArr.length > 0) {
//         let minIndex = 0;
//         let minValue = tempdArr[0];

//         for (let i = 1; i < tempdArr.length; i++) {
//             if (tempdArr[i] < minValue) {
//                 minValue = tempdArr[i];
//                 minIndex = i;
//             }
//         }

//         sortedArray.push(minValue);
//         tempdArr.splice(minIndex, 1);
//     }

//     return sortedArray;
// }

let numArray = [7, 6, 5, 4, 3, 2];

function computeMin(numbers, indexToStart) {

    let minNumIndex = null
    let minNumber = Number.MAX_SAFE_INTEGER
    for (let i = indexToStart; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        if (currentNumber < minNumber) {
            minNumIndex = i
            minNumber = currentNumber
        }
    }
    return minNumIndex
}

function switchNumbers(numbers, indexI, indexJ) {

    let temp = numbers[indexI]
    numbers[indexI] = numbers[indexJ]
    numbers[indexJ] = temp
}

function sortNumbers(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        const indexMin = computeMin(numbers, i);
        switchNumbers(numbers, i, indexMin);
    }
}


sortNumbers(numArray)
console.log(numArray);




