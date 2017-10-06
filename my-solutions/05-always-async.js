var promise = new Promise(function(fulfill, rejct){
	fulfill('PROMISE VALUE');
})

promise.then(console.log);

console.log("MAIN PROGRAM");