const fs = require('fs');
fs.readFile('cidades.txt',(err,data)=> {
    if (err) throw err;
    console.log(data.toString());
});

for (var i=1; i<=10; i++)
    console.log("segunda parte= " +i);