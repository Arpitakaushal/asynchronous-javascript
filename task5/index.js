function loanSanctionPromise() {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        const loanSanctionPromise=Math.random()>0.5
        if(loanSanctionPromise)
        {
            resolve("Loan sanctioned")
        }
        else{
            reject("Loan not sanctioned")
        }
    },3000)
    })

      
}
loanSanctionPromise()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})