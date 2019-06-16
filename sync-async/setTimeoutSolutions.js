// Problem : Preserve value of 'i'. Output should be 1 2 3 4 and not 4 4 4 4.
for(i=0;i<4;i++) {
  setTimeout(function() {
    //console.log(i)
  }, 1000)
}


// Solution using Promise

for(i=0;i<4;i++) {
  // Preserving the data or resolving 'i' here.
  const p = new Promise(function(resolve, reject) {
    resolve(i);
  });
  
  setTimeout(function() {
    // Applying the data
    p.then(function(resolvedMessage) {
      //console.log(resolvedMessage)
    })
  }, 1000)
  
}

//Solution by creating a function and looping it for different values of 'i';
// by creating function we are creating separate copies of 'i' registered for the
// particular function.
function doSetTimeout(i) {
  setTimeout(function() { //console.log(i); 
  }, 100);
}

for (var i = 1; i <= 4; ++i)
  doSetTimeout(i);


// Using IIFE, basically same functional approach as above; 
// but creating and calling funct immediately at the same time 
for (var i = 1; i <= 3; i++) {
    (function(index) {
        setTimeout(function() { 
          console.log(index); 
        }, 1000);
    })(i);
}