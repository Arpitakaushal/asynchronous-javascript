function boilWater(callback1, callback2, callback3) {
    return new Promise(function(resolve,reject){
        setTimeout(function (){
         resolve("Water boiled")
        },2000)
    }) 
}
   
   function addCoffeePowder(callback1, callback2) {
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve("Added coffee powder")
        },500)
    })
}
      
   function brewCoffee(callback) {
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve("Brewed coffee")
        },1000)
    })
}  
   function haveCoffee() {
   
    setTimeout(function () {
   
     console.log("Enjoying my coffee");
   
    }, 500);
   
   }
   boilWater().then(function(result){
    console.log(result)
    addCoffeePowder().then(function(result){
        console.log(result)
        brewCoffee().then(function(result)
        {
            console.log(result)
            haveCoffee()
        })
    })
   })
   