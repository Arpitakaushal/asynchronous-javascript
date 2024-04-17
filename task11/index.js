function  checkCar() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        let  checkCar=Math.random()>0.5
        if( checkCar)
        {
            resolve("Car is ready")
        }
        else{
            reject("Error: Car needs maintenance")
        }
    },2000)
    })
}
function  packForPicnic() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        let  packForPicnic=Math.random()>0.5
        if( packForPicnic)
        {
            resolve("Packed everything for picnic")
        }
        else{
            reject("Error: Not have some essentials")
        }
    },1000)
    })
}

checkCar()
.then((foodMsg)=>{
console.log(foodMsg)
return packForPicnic()
})
.then((dessetMsg)=>{
    console.log(dessetMsg)
    console.log("Go for picnic")
})
.catch((error)=>{
    console.log(error)
    console.log("Picnic cancelled")
})



