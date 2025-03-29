const { log } = require('console');
let fs = require('fs');

fs.readFile('calc.js', 'utf8', (err, data)=>{
    if(err)
        console.log(err);
        
    else
    console.log(data);
    
})
