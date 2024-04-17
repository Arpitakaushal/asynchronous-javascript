function  orderFood() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        let  foodDeliver=Math.random()>0.5
        if( foodDeliver)
        {
            resolve("Food delivered")
        }
        else{
            reject("Food not delivered")
        }
    },2000)
    })
}
function  orderDessert() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        let  dessertDelivered=Math.random()>0.5
        if(  dessertDelivered)
        {
            resolve("Dessertdelivered")
        }
        else{
            reject("Dessert not delivered")
        }
    },2000)
    })
}

orderFood()
.then((foodMsg)=>{
console.log(foodMsg)
return orderDessert()
})
.then((dessetMsg)=>{
    console.log(dessetMsg)
    console.log("Dream Meal Fullfiled")
})
.catch((error)=>{
    console.log(error)
    console.log("Dream Meal not Fullfiled")
})



