// let myObj = { value : 2 , index : 3}

// function saveObj() {
//     localStorage.setItem("result", JSON.stringify(myObj))
// }

// function readObj() {
//     let result = JSON.parse(localStorage.getItem("result"))
//     console.log(result);
// }

function deleteLocalStorage() {
    localStorage.clear();
    console.log(localStorage);
}

// let myArray = [4,2,5,2,"Nevo"]
// console.log(myArray);
// let myArrayAsJson = JSON.stringify(myArray)
// console.log(myArrayAsJson);


let elemInput = document.querySelector('.todo-input')
const elemTodoListDiv = document.querySelector('.todo-list')
let myTodoList = initializeTodoList()
console.log(myTodoList);

function initializeTodoList() {
    if (localStorage.getItem('todo-list') === null) {
        return []
    }
    return JSON.parse(localStorage.getItem('todo-list'))
}

function addTodoToList() {
    if (myTodoList.includes(elemInput.value)) {
        alert("You already have this TODO")
    }
    else if (elemInput.selectionStart <= 0) {
        alert("Please insert something")
    }
    else {
    myTodoList.push(elemInput.value)
    updateLocalStorage()
    showTodoList()
    elemInput.value = ""
    }
}

function showTodoList() { 
    elemTodoListDiv.innerHTML = ""
    let parseArray = JSON.parse(localStorage.getItem("todo-list"))
        for (item of parseArray) {
            elemTodoListDiv.innerHTML += `<li onclick="removeTodo(this)" style= "color : black" >${item}</li>`;
        }
        elemTodoListDiv.innerHTML += `<br> <button onclick="sortTodos()"> Sort Todos </button>`;
}

function removeTodo(item) {
    console.log(item);
    if (item.style.color === 'black') {
        toggleTodoColor(item)
    }
    else {
        const todoText = item.innerText;
        const index = myTodoList.indexOf(todoText);
        myTodoList.splice(index, 1);
        updateLocalStorage()
        showTodoList();
    }
    
}

function toggleTodoColor(item) {
    item.style.color = (item.style.color === 'black') ? 'green' : 'black';

}


function sortTodos() {
    myTodoList = myTodoList.sort()
    updateLocalStorage()
    showTodoList()
}

function updateLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(myTodoList))
}





