function greeting (name)
{
    console.log("AOA, "+name);
}

function processUserInput(callback)
{
    var name = prompt("Please enter your name.");
    callback(name);
}
processUserInput(greeting);