const { log } = require('console');
let fs = require('fs');

fs.appendFile('calc.js', 'console.log("add done")', (err, data)=>{
    if(err)
        console.log(err);
        
    else
    console.log(data);
    console.log("Done");
    
    
})
