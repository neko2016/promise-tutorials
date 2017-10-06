var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
    .then(function(id){
        return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function(val){
        console.log(JSON.parse(val))
    })
    .then(null, console.error)
    .done();

