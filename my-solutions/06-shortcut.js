// var promise = new Promise(function(fulfill, reject){
//  // fulfill('FULFILLED!');
//  reject(new Error("REJECTED!"))
// })

// function onReject(err){
//  console.log(err.message);
// }

// promise.then(console.log).catch(onReject)

var promise = Promise.resolve("RESOLVED!");

function onReject(err){
 console.log(err.message);
}

promise.then(console.log).catch(onReject);