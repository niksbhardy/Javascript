// Fetching data from api in serial manner using loop
// Here aynchronous code being wrapped in synchronous For Loop.
// To consume the promise in proper fashion we use setTimeout in order to get
// result in serial manner..like fetch post id 1, then 2, then 3.
// But the accuracy of this method varies from 50% to 95%. So, UNRELIABLE to asynchronus
// or network calls. But works fine with AXIOS with proper setTimeout.
// However, this method can be used in use cases like where synchrounous code needs to be executed inside
// setTimeout function.
// //<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>

const arr = [];

for(i=1;i<=100;i++) {
  const promise = new Promise(function(resolve, reject) {
    resolve(fetch('https://jsonplaceholder.typicode.com/posts/'+i));
    
  });  

  setTimeout(function() {
    promise.then(response => {
      return response.json();
    })
    .then(posts => {
      arr.push(posts.id)
      console.log(arr)
    })
    .catch((err) => {
      console.log(err);
    })
  }, 1000)
  
}
