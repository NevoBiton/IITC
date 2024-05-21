

const elemTableOfPosts = document.querySelector('.content')
const elemLoaderContainer = document.querySelector('.wifi-container')
const url = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users"

let usersNameArray = []

axios.get(usersUrl)
  .then(function (response) {
    elemLoaderContainer.style.display = 'flex'
    setTimeout(() => {   
      console.log(response.data);
      saveNamesIntoArray(response.data)
      //second axios
      axios.get(url)
      .then(function (response) {
        console.log(response.data);
        printAllPostsToPage(response.data) })
        elemLoaderContainer.style.display = 'none'
    }, 3000)
    .catch(function (error) {
      console.error(error);
    })
  })
  .catch(function (error) {
    console.error(error);
  })

  function saveNamesIntoArray(array) { // sort the names array
    array.forEach(user => {
      usersNameArray.push(user.name)
    });
  }

  function printAllPostsToPage(posts) { // print the posts to the page

    elemTableOfPosts.style.display = "block"
    posts.forEach(post => {
      const postHTML = `
      <tr>
      <th>${post.title}</td>
      <td>${usersNameArray[post.userId - 1]}</td>
      <td>${post.id}</td>
      <td>${post.body}</td>
    </tr>`;
    elemTableOfPosts.innerHTML += postHTML;
    });
}


// Print to page by ID 

function printOnePostToPage(post) {
  const postHTML = `
    <tr>
    <th>${post.title}</td>
    <td>${post.userId}</td>
    <td>${post.id}</td>
    <td>${post.body}</td>
  </tr>

  `;
  elemTableOfPosts.innerHTML += postHTML;
}

let idsArray = [1,5,11]

function printPostByIds() {
  for (const id of idsArray) {
    let currentUrl = `https://jsonplaceholder.typicode.com/posts/${id}`
    axios.get(currentUrl)
    .then(function (response) {
      printOnePostToPage(response.data)
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {
    });
    
  }
}

// printPostByIds()
