// Fetching data from api in serial manner using Recursion.
// Here aynchronous code is calling itself till it reaches 100 post.
// Unlike being controlled by synchronous For Loop, this method is asynchronous
// and calls itself again only after resolving the previous call.
// It is therefore asynchronous calling asynchronous.
// The accuracy of this method is 100%. So, RELIABLE to asynchronus
// or network calls.

const arr = [];
function getPosts(id) {
  if(id === 101) {
    return;
  }
  fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then(response => {
      return response.json();
    }).then(posts => {
  //console.log(JSON.stringify(posts).replace(/\"/g, ""))
//   console.log(posts.id)
    arr.push(posts.id)
    console.log(arr)
    id++;
    getPosts(id);
    })
    .catch((err) => {
      console.log(err);
    })

  }
  

getPosts(1)