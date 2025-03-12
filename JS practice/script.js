// var ans = new Promise((res, rej)=>{
//     if(false)
//     {
//         return res();
//     }
//     else
//     {
//         return rej();
//     }
// });
// ans
// .then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.log("Rejected");
// })

//User will ask for a number b/w 0 se 9 and if the number is 
//greater than 5 , so reolve it , otherwise reject.
// var ans = new Promise((res, rej)=>{
//     var n = Math.floor(Math.random()*10);
//     if(n>5)
//     {
//         return res();
//     }
//     else
//     {
//         return rej();
//     }

// });
// ans.then(()=>{
//     console.log("ABOVE");
// })
// .catch(()=>{
//     console.log("BELOW");
// })
//ghar jao
//lock lagao
//khana khao

var p1 = new Promise((res, rej)=>{
    return res("ghar jao");
});

var p2 = p1.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("lock lagao");
    })
});

var p3 = p2.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("khana khao");
    })
});
p3.then((data)=>{
    console.log(data);
});








