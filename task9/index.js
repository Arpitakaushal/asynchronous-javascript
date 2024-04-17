function checkWeather() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        const checkWeather=Math.random()>0.5
        if(checkWeather)
        {
            resolve("Let us go for picnic")
        }
        else{
            reject("Error: It is cloudy")
        }
    },3000)
    })
}
checkWeather().then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})