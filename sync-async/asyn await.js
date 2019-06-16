const url = 'https://jsonplaceholder.typicode.com/posts/';
//INCLUDE AXIOS 


//   fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then(response => {
//     return response.json();
//   }).then(posts => {
//   console.log(JSON.stringify(posts).replace(/\"/g, ""))

//   })
//   .catch((err) => {
//   console.log(err);
//   })



const getPost = async function() {
  try {
    return await axios.get('https://jsonplaceholder.typicode.com/posts/');
  } catch(err) {
    console.log(error);
  }
}

const posts = async function() {
  const allPost = await getPost();
  if(allPost.data) {
    console.log(allPost.data)
  }
}

posts()