function greeting ()
{
    console.log("AOA");
}
console.log('Before');
setTimeout(greeting, 3000);
console.log('After');

console.log('Before');
setTimeout(function() {
    console.log('Anonymous')
}, 5000)
console.log('After');

const multiply = function(a, b){
    return a*b;
}
console.log(multiply(3, 5));