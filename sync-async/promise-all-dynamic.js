// IMPORT AXIOS
// creating closure function 'p' to store the value of 'i' and 
// use at the time of execution of inner function
let p = function(i) {
  return function() {
    return new Promise(function (resolve, reject) {
      resolve(axios('https://jsonplaceholder.typicode.com/posts/'+i))
    })
  }
}

const pArray = [];

for(let i=1;i<100;i++) {
  // calling function partially..or executing just outer one and pushing into array
  pArray.push(p(i));
}



// pArray contains unexecuted functions; executing them using map function for each item;
Promise.all(pArray.map(function(item) {
  //execute item by adding () paranthesis
  return item();
})).then((values)=> {
  console.log(values.map(item=> item.data.id))
})

/*
FOR FETCH
// pArray contains unexecuted functions; executing them using map function for each item;
Promise.race(pArray.map(function(item) {
  //execute item by adding () paranthesis
  return item();
}))
 .then(response => 
    response.json()
      .then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    console.log(res.data.id)
}));

// pArray contains unexecuted functions; executing them using map function for each item;
Promise.all(pArray.map(function(item) {
  //execute item by adding () paranthesis
  return item();
})).then((values)=> {
  //return values.map(item => item.status)
  return values.map(item => item.json())
}).then((values)=> {
  console.log(values[0])
})
*/
