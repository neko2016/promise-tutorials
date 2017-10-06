function all(a, b){
    return new Promise(function(fulfill, reject){
        var count = 0;
        var arr = []

        a.then(function(val){
            arr[0] = val;
            count++;
            if(count >= 2){
                fulfill(arr);
            }
        });

        b.then(function(val){
            arr[1] = val;
            count++;
            if(count >= 2){
                fulfill(arr);
            }
        });

    });
}

all(getPromise1(), getPromise2())
    .then(console.log);

