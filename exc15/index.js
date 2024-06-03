// exc 1

let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");
fruits.pop();
fruits.unshift("StrawBerry");
fruits.shift();

// console.log(fruits);

// exc 2

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index) => {
//   console.log(number, index);
// });

// const newNums = numbers.map((number) => {
//   return number * 2;
// });

// const res = numbers.filter((number) => {
//   return number % 2 == 0 ? number : null;
// });

// const res = numbers.reduce((totalNums, number) => {
//   return (totalNums += number);
// }, 0);

// exc 3

// let students = ["Omer", "Jane", "Biden", "Jill"];

// const res = students.find((student) => {
//   return student[0].toLowerCase() === "j" ? student : null;
// });

// const res = students.some((student) => {
//   return student[0].toLowerCase() === "j";
// });

// const res = students.every((student) => {
//   return student[0].toLowerCase() === "j";
// });

// console.log(res);

// exc 4

// let colors = ["red", "blue", "green", "yellow", "purple"];

// // const res = colors.slice(0, 3);

// const res = colors.splice(colors.length - 2, 2, "Nevo", "Dor");

// console.log(colors);

// exc 5

// let products = [
//   { name: "laptop", price: 1000 },
//   { name: "phone", price: 500 },
//   { name: "tablet", price: 800 },
//   { name: "watch", price: 200 },
// ];

// const res = products.map((product) => {
//   return product.name;
// });

// const res = products.filter((product) => {
//   return product.price > 500 ? product : null;
// });

// const res = products.reduce((totalSum, product) => {
//   return (totalSum += product.price);
// }, 0);

// challange 1

// const inventory = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 800 },
// ];

// function arrayToObject(arr, key) {
//   const res = arr.reduce((newObj, item) => {
//     newObj[item[key]] = item;
//     return newObj;
//   }, {});
//   return res;
// }

// console.log(arrayToObject(inventory, "id"));

// challange 4

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// function intersectArrays(arr1, arr2) {
//   const res = arr1.filter((number) => {
//     return arr2.includes(number)
//   });
//   return res;
// }

// console.log(intersectArrays(array1, array2));

// challange 5

const duplicates = [1, 2, 2, 3, 4, 4, 5];

function uniqueValues(arr) {
  const res = arr.reduce((uniqueArr, number) => {
    if (!uniqueArr.includes(number)) {
      uniqueArr.push(number);
    }
    return uniqueArr;
  }, []);
  return res;
}

// console.log(uniqueValues(duplicates));

// challange 6

const employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(arr, key) {
  return arr.reduce((finalObj, item) => {
    // Get the value of the key for the current item
    const keyValue = item[key];
    // If the key doesn't exist in the finalObj object, create an array for it
    if (!finalObj[keyValue]) {
      finalObj[keyValue] = [];
    }
    // Add the current item to the array for this key
    finalObj[keyValue].push(item);
    return finalObj;
  }, {});
}

console.log(groupBy(employees, "yearsOfExp"));

// leetCode

// function reverseString(s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     let temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;

//     left++;
//     right--;
//   }
// }

// const s1 = ["h", "e", "l", "l", "o"];
// reverseString(s1);
// console.log(s1);

// const s2 = ["H", "a", "n", "n", "a", "h"];
// reverseString(s2);
// console.log(s2);
