// promise 3

// function getUser() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const user = { id: 1, name: "John Doe" };
//         resolve(user);
//       }, 1000);
//     });
//   }
  

//   getUser()
//     .then((user) => {
//       console.log(user);
//       return user;
//     })
//     .then((user) => {
//       console.log(`User's name is ${user.name}`);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
  

// promise 3.5


// const driveToGasStation = new Promise((resolve, reject) => {
//     resolve('Drive to gas station');
//   });
  
//   const fillTheCar = new Promise((resolve, reject) => {
//     resolve('Fill the car');
//   });
  
//   const driveToRestaurant = new Promise((resolve, reject) => {
//     resolve('Drive to restaurant');
//   });
  
//   driveToGasStation
//     .then((message) => {
//       console.log(message);
//       return fillTheCar;
//     })
//     .then((message) => {
//       console.log(message);
//       return driveToRestaurant;
//     })
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// promise 7

// const elemNumOfPosts = document.querySelector('.num-of-posts');
// const elemNumOfUsers = document.querySelector('.num-of-users');
// const elemNumOfComments = document.querySelector('.num-of-comments');

// let postsUrl = "https://jsonplaceholder.typicode.com/posts";
// let usersUrl = "https://jsonplaceholder.typicode.com/users";
// let commentsUrl = "https://jsonplaceholder.typicode.com/comments";

// axios.get(postsUrl)
//   .then(function(response) {
//     let numOfPosts = response.data.length;
//     console.log(`You have ${numOfPosts} posts `);
//     elemNumOfPosts.textContent = `Number of Posts: ${numOfPosts}`;
//     return axios.get(usersUrl);
//   })
//   .then(function(response) {
//     let numOfUsers = response.data.length;
//     console.log(`You have ${numOfUsers} users `);
//     elemNumOfUsers.textContent = `Number of Users: ${numOfUsers}`;
//     return axios.get(commentsUrl);
//   })
//   .then(function(response) {
//     let numOfComments = response.data.length;
//     console.log(`You have ${numOfComments} comments `);
//     elemNumOfComments.textContent = `Number of Comments: ${numOfComments}`;
//   })
//   .catch(function(error) {
//     console.log(error);
//   });


// promise 5


// function fetchUser() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id: 1, name: 'John Doe' });
//       }, 1000); // 1 second delay
//     });
//   }

//   function fetchPosts() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(['Post1', 'Post2']);
//       }, 2000); // 2 second delay
//     });
//   }
  
//   Promise.all([fetchUser(), fetchPosts()])
//     .then((results) => {
//         let user = results[0]
//         let posts = results[1]
//         console.log('User:', user.name);
//         console.log('Posts:', posts);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });


// promises 8

// const elemNumOfPosts = document.querySelector('.num-of-posts');
// const elemNumOfUsers = document.querySelector('.num-of-users');
// const elemNumOfComments = document.querySelector('.num-of-comments');
// let sumOfPostUserComment = 0

// let postsUrl = "https://jsonplaceholder.typicode.com/posts";
// let usersUrl = "https://jsonplaceholder.typicode.com/users";
// let commentsUrl = "https://jsonplaceholder.typicode.com/comments";

// axios.get(postsUrl)
//   .then(function(response) {
//     let numOfPosts = response.data.length;
//     sumOfPostUserComment += numOfPosts
//     return axios.get(usersUrl);
//   })
//   .then(function(response) {
//     let numOfUsers = response.data.length;
//     sumOfPostUserComment += numOfUsers
//     return axios.get(commentsUrl);
//   })
//   .then(function(response) {
//     let numOfComments = response.data.length;
//     sumOfPostUserComment += numOfComments
//     elemNumOfPosts.innerHTML = `The sum of the posts, users and comments is ${sumOfPostUserComment}`

//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// promise 6

function promiseAll(promises) {
    // Return a new promise
    return new Promise((resolve, reject) => {
        // Check if the input is an array
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument is not an iterable"));
        }

        // Initialize an array to hold the results
        const results = [];
        // Initialize a counter to keep track of resolved promises
        let resolvedCount = 0;
        const promisesLength = promises.length;

        // Handle the case of an empty array
        if (promisesLength === 0) {
            return resolve(results);
        }

        // Iterate over each promise
        promises.forEach((promise, index) => {
            // Convert the item to a promise if it's not already
            Promise.resolve(promise)
                .then((value) => {
                    // Store the result and increment the counter
                    results[index] = value;
                    resolvedCount += 1;

                    // If all promises have resolved, resolve the main promise
                    if (resolvedCount === promisesLength) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // If any promise rejects, reject the main promise
                    reject(error);
                });
        });
    });
}

// Example usage
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values); // [3, 42, 'foo']
}).catch((error) => {
    console.error(error);
});










  


