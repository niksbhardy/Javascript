//Resolve an array of promises

const arr = [];
const fn = function(i) {
  //create a promise object
   new Promise(function(resolve, reject) {
  resolve('resolved ' + i)
})
.then(function(msg) {
 // consume the promise
 console.log(msg)
})
}

// push the function containing the promise into the array
for(let i=0;i<10;i++) {
  arr.push(fn)
}

//console.log(arr)

//execute the functions at every index
for(let i=0;i<10;i++) {
  arr[i](i)
}