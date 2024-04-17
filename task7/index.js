function buyBike(callback1, callback2, callback3) {
    return new Promise(function(resolve,reject){
        setTimeout(function (){
         resolve("Bought Royal Enfield Himalayan")
        },2000)
    }) 
}
   
   function planTrip(callback1, callback2) {
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve("Trip to Ladakh planned")
        },1000)
    })
}
      
   function reachLadakh(callback) {
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            resolve("Reached Ladakh")
        },1000)
    })
}  
   function visitPangongLake() {
   
    setTimeout(function () {
   
     console.log("Visited Pangong Lake");
   
    }, 500);
   
   }
   buyBike().then(function(result){
    console.log(result)
    planTrip().then(function(result){
        console.log(result)
        reachLadakh().then(function(result)
        {
            console.log(result)
            visitPangongLake()
        })
    })
   })
   