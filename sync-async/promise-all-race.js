//IMPORT AXIOS

let p1 = function() {
  return new Promise(function (resolve, reject) {
    resolve(axios('https://jsonplaceholder.typicode.com/posts/'+1))
  })
}

let p2 = function() {
  return new Promise(function (resolve, reject) {
    resolve(axios('https://jsonplaceholder.typicode.com/posts/'+2))
  })
}

let p3 = function() {
  return new Promise(function (resolve, reject) {
    resolve(axios('https://jsonplaceholder.typicode.com/posts/'+3))
  })
}

let p4 = function() {
  return new Promise(function (resolve, reject) {
    resolve(axios('https://jsonplaceholder.typicode.com/posts/'+4))
  })
}

let p5 = function() {
  return new Promise(function (resolve, reject) {
    resolve(axios('https://jsonplaceholder.typicode.com/posts/'+5))
  })
}

let p6 = function() {
  return new Promise(function (resolve, reject) {
    resolve(axios('https://jsonplaceholder.typicode.com/posts/'+6))
  })
}


//console.log(pArray)

Promise.all([p1(), p2(), p3(), p4(), p5(), p6()])
  .then(function(values) {
//   console.log(values)
    console.log(values.map(item => item.data.id))
  })

//For FETCH
// Promise.race([p1(), p2(), p3(), p4(), p5(), p6()])
//   .then(function(values) {
//   return values.json()
//   }).then(function(values) {
//   console.log(values.id)
// })

