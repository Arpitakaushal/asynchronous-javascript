function concertPassPromise() {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        const concertPassPromise=Math.random()>0.5
        if(concertPassPromise)
        {
            resolve("Pass received")
        }
        else{
            reject("Pass not received")
        }
    },3000)
    })

      
}
concertPassPromise()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})