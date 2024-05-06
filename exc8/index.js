// exc1

// let myArray = [1,2,3,-4,5]

// function findNumber(num) {
// const found = myArray.find((number) => (number == num) ? num : undefined);
// return !found == undefined
// }

// console.log(findNumber(5));

// exc2

// let persons = [
//     { name : "Nevo Biton", age : 22 },
//     { name : "Nitai Biton", age : 20 },
//     { name : "Nadav Biton", age : 17 }   
// ]

// function findPersonByAge(age) {
// const foundPerson = persons.find((person) => (person.age === age) ? person : undefined);
// return foundPerson
// }

// console.log(findPersonByAge(17));

// exc3

// let myArray = [1,2,3,-4,5]

// myArray.splice(2,1)
// console.log(myArray);

// exc4

// let persons = [
//     { name : "Nevo Biton", age : 22 },
//     { name : "Nitai Biton", age : 20 },
//     { name : "Nadav Biton", age : 17 }   
// ]

// function deletePersonByAge(age) {

//     persons.forEach((person, index) => {
//         person.age === age ? persons.splice(index,1) : null    
//     })
// }

// deletePersonByAge(20)
// console.log(persons);

// exc5

// let myArray = [1,2,3,-4,5]
// myArray = myArray.filter((num) => num % 2 != 0);
// console.log(myArray);

// exc6

// let persons = [
//     { name : "Nevo Biton", age : 22 },
//     { name : "Nitai Biton", age : 20 },
//     { name : "Nadav Biton", age : 35 },
//     { name : "Ilan Biton", age : 51 }   
// ]

// persons = persons.filter((person) => person.age > 33);
// console.log(persons);

// exc7

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, initialValue,
// );

// console.log(sumWithInitial);

// exc8

// let names = ["Nevo", "Nitai", "Neta", "Nadav"]
// const contant = document.querySelector('#contant')

// function printNamesOnBoard() {
// const elemUnOrderedList = document.createElement("ul")
//    let content =  names.map((name) => contant.appendChild(elemUnOrderedList).innerHTML += `<li>${name}</li>` );
//    console.log(content);
// }

// printNamesOnBoard()
















