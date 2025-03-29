const { log } = require('console');
let fs = require('fs');

fs.writeFile('calc1.js', 'console.log("writeFile")', (err, data)=>{
    if(err)
        console.log(err);
        
    else
    console.log(data);
    console.log("Done");
    
    
})
