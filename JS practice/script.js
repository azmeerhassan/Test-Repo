let stocks = 
{
     Fruits:["strawberry", "grapes", "banana", "apple"], 
     liquid:["water", "ice"], 
     holder:["cone", "cup", "stick"], 
     toppings:["chocolate", "peanuts"], 
    };
// let order = (fruitName, call_production)=>{
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[fruitName]} was selected`);
//         call_production();
//     },2000)
// };
// let production = ()=>{

//     setTimeout(()=>{
//         console.log("Production has started.")

//         setTimeout(()=>{
//             console.log("Fruit has been chopped.")

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is slected}`)

//                 setTimeout(()=>{
//                     console.log("Start the machine");

//                     setTimeout(()=>{
//                         console.log(`Selected ${stocks.holder[0]}`)

//                         setTimeout(()=>{
//                             console.log(`Selected ${stocks.toppings[0]}`);

//                             setTimeout(()=>{
//                                 console.log("Serve ice cream");

//                             },2000)

//                         },3000)

//                     },2000)

//                 },1000)

//             },1000)
            
//         },2000)

//     },0)
// };
// order(0, production);

let is_shop_open = true;

// let order = (time, work)=>{
//     return new Promise((resolve, reject)=>{
//         if(is_shop_open)
//         {
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
//         }
//         else
//         {
//             reject(console.log("Our shop is closed"))
//         }
//     })
// }

// //step 1
// order(2000, ()=>{console.log(`${stocks.Fruits[0]} was selected`)})

// //step 2
// .then(()=>{
//     return order(0, ()=>console.log('production has started'))
// })

// //step3
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is slected`))
// })

// //step4
// .then(()=>{
//     return order(2000, ()=>console.log('Start the machine'))
// })

// //step5
// .then(()=>{
//     return order(3000, ()=>console.log(`Selected ${stocks.holder[0]}`))
// })

// //step6
// .then(()=>{
//     return order(1000, ()=>console.log(`Selected ${stocks.toppings[0]}`))
// })

// //step7
// .then(()=>{
//     return order(1000, ()=>console.log('Serve ice cream'))
// })
// .catch(()=>{
//     console.log("Customer left")
// })

// .finally(()=>{
//     console.log("end of day")
// })

// function toppings_choice(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("which topping to choose"))
//         },3000)
//     })
// }

// async function kitchen(){
//     console.log('A')
//     console.log('B')
//     console.log('C')

//     await toppings_choice()
//     console.log('D')
//     console.log('E')
// }
// kitchen();

// console.log('doing the dishes')
// console.log('cleaning the tables')
// console.log('taking orders')

function time(ms)
{
    return new Promise((resolve, reject)=>{
        if(is_shop_open)
        {
            setTimeout(resolve, ms);
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0)
        console.log('production has started')
        await time(2000)
        console.log('fruit has been chopped')
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
        await time(1000)
        console.log('Start machine')
        await time(2000)
        console.log(`ice cream placed on ${stocks.holder[0]}`)
        await time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)
        await time(2000)
        console.log('Served ice cream')
        
    }
    catch(error)
    {
        console.log("Customer left", error)
    }
    finally{
        console.log("Day ended , shop closed")
    }
}
kitchen();


