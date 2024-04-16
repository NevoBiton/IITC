// EXC 0

// let harryPotter = {bookName : 'Harry Potter', pages : 120}
// let lionKing = {bookName : 'Lion King', pages : 160}
// let shrek = {bookName : 'Shrek', pages : 200}
// let books = [harryPotter, lionKing, shrek]

// books.splice(2,1)
// console.log(books);


// function printBooks(books) {
//     for (item of books) {
//         console.log(item.bookName + " " + item.pages);
        
//     }
// }

// printBooks(books)

// console.log(books);

// EXC 1

// function addBooks(books, nameOfBook, bookPages) {
//     let newBook = {bookName : nameOfBook, pages : bookPages}
//     books.push(newBook)
// }

// addBooks(books, "Nevo", 123)
// console.log(books);


// EXC 2

// function getBook(books, name) {
//     for (i of books) {
//         if (i.bookName == name) {
//             return i;
//         }
//     }
// }

// console.log(getBook(books, "Shrek"))

// EXC 3

// function updateBookPages(books, name, numOfPages) {
//     for (item of books) {
//         if (item.bookName == name) {
//             item.pages = numOfPages
//             return item
//         }

//     }
// }

// console.log(updateBookPages(books, "Shrek", 300))

// EXC 4

// function deleteBook(books, name) {
//     for (let i = 0; i < books.length; i++) {
//         const element = books[i];
//         if (element.bookName == name) {
//             books.splice(i, 1)
//             return true
//         }
//     }
// }

// deleteBook(books, "Harry Potter")
// console.log(books);

// EXC 5


let list = [9, 1, 8, 4];

function increaseNumber(array, target) {
    let numIndex = array.find((num, index) => {
        if (num === target) {
            array[index]++;
            return true;
        }
    });
}

increaseNumber(list, 8);

console.log(list); // Output: [9, 1, 9, 4]












