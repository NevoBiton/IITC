// Loops nested



// for (let j = 1; j <= 10; j++) {
//     let board = ''
//     for (let i = 1; i <= 10; i++) {
//         board += ' ' + i * j
//     }
//     console.log(board + '\n');


// }


// Function 2

// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(3, 6))




// Function 3

// function returnMaxNum(num1, num2) {
//     return num1 > num2 ? num1 : num2
// }

// console.log(returnMaxNum(1, 7))



// Function 5

// function numberPlusFollows(number) {
//     counter = number
//     let newNumber = 0
//     for (let i = 1; i <= number; i++) {
//         newNumber += counter
//         counter -= 1
//     }
//     return newNumber
// }

// console.log(numberPlusFollows(7))



// Function 6

// function swapVariables() {

//     let c = x
//     x = y
//     y = c
// }

// let x = 10
// let y = 5

// swapVariables()

// console.log(x);
// console.log(y);



// Function 7

// function astPrint(number) {

//     counter = number
//     str = ''
//     for (let i = 0; i < number; i++) {
//         str += ' * '
//         console.log(str);
//     }

// }

// console.log(astPrint(7))




// Function 8

// function seperateNums(number) {

//     let sum = 0
//     while (number >= 10) {
//         let addedNum = number % 10
//         sum += addedNum
//         number = Math.floor(number / 10)
//     }
//     sum += number
//     return sum

// }

// console.log(seperateNums(154801))


// Function 9

// function fabonachi(number) {

//     if (number == 1) {
//         return [1]
//     }
//     else if (number == 2) {
//         return [1, 1]
//     }
//     else if (number === 3) {
//         let output = [1, 1, 2]
//         return output
//     }
//     else if (number > 3) {
//         let output = [1, 1, 2]
//         while (output.length < number)
//             output.push(output[output.length - 2] + output[output.length - 1])

//         return output
//     }

// }

// console.log(fabonachi(10))




// Array 0.5

// let list = [5, 3, 7, 8, 11]
// let sum = 0

// for (i of list) {
//     sum += i
// }

// console.log(sum);


// Array 0.7

// let names = ['Nevo', 'Nitai', 'Neta', 'Nadav', 'Nir']

// for (i of names) {
//     console.log(i);
// }


// Array 1

// let list = []

// for (let i = 1; i <= 100; i++) {
//     list.push(i)
// }

// console.log(list);




// Array 2

// let numbers = []

// function average(array) {
//     let sum = 0
//     for (i of array) {
//         sum += i
//     }
//     sum /= array.length

//     return sum
// }

// function sum(array) {
//     let addNums = 0
//     for (i of array) {
//         addNums += i
//     }

//     return addNums
// }


// for (let i = 0; i < 5; i++) {
//     let randomNumber = Math.floor(Math.random() * 99) + 1
//     numbers.push(randomNumber)
// }

// console.log(numbers);
// console.log(average(numbers))
// console.log(sum(numbers));



// Array 2.5

// let list = [1, 2, 3, 4, 5]

// function isInTheArray(array, number) {

//     for (i in array) {
//         if (array.includes(number)) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }

// console.log(isInTheArray(list, 7))


// Array 2.7

// let list1 = [1, 5, 8, 6, 2]
// let list2 = [5, 8, 2, 6, 2]


// function arraysDuplicates(array1, array2) {
//     let newArray = []
//     for (i of array1) {
//         if (array2.includes(i)) {
//             newArray.push(i)
//         }
//     }
//     return console.log(newArray.length)

// }

// arraysDuplicates(list1, list2)



// Array 4

// let list = [1, 2, 3, 1, 2, 4, 2, 2, 2, 5, 5, 5, 5]

// function noDuplicates(array) {

//     let newList = []
//     for (i of array) {
//         if (!newList.includes(i)) {
//             newList.push(i)
//         }
//     }
//     return newList
// }


// console.log(noDuplicates(list))