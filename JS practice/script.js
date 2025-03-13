let stocks = 
{
     Fruits:["strawberry", "grapes", "banana", "apple"], 
     liquid:["water", "ice"], 
     holder:["cone", "cup", "stick"], 
     toppings:["chocolate", "peanuts"], 
    };
let order = (fruitName, call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruitName]} was selected`);
        call_production();
    },2000)
};
let production = ()=>{

    setTimeout(()=>{
        console.log("Production has started.")

        setTimeout(()=>{
            console.log("Fruit has been chopped.")

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is slected}`)

                setTimeout(()=>{
                    console.log("Start the machine");

                    setTimeout(()=>{
                        console.log(`Selected ${stocks.holder[0]}`)

                        setTimeout(()=>{
                            console.log(`Selected ${stocks.toppings[0]}`);

                            setTimeout(()=>{
                                console.log("Serve ice cream");

                            },2000)

                        },3000)

                    },2000)

                },1000)

            },1000)
            
        },2000)

    },0)
};
order(0, production);

