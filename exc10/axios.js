
// exc 1.5

const elemP = document.querySelector('p');
const elemDivOfPosts = document.querySelector('.table-of-posts');
const elemLoader = document.querySelector('.loader')
const url = "https://jsonplaceholder.typicode.com/posts";

axios.get(url)
  .then(function (response) {
    elemLoader.style.display = "block"
    setTimeout(() => { printPostsToPage(response.data)
        elemLoader.style.display = "none"
    } , 5000)
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
  });

function printPostsToPage(posts) {
    elemDivOfPosts.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<p>Title: ${post.title}</p><p>Body: ${post.body}</p>`;
        elemDivOfPosts.appendChild(postElement);
    });
}
