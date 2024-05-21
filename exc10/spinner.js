
const elemP = document.querySelector('p')

function clickHandler() {
    const resolveHandler = () => {
        elemP.innerHTML = ""
    }
    const promise = new Promise((resolve, reject) => {
        elemP.innerHTML = "Loading..."
        setTimeout(() => {
            resolve()
        } , 2000)
    })   
    promise.then(resolveHandler) 
}
