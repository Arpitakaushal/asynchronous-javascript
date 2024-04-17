function bookSearchPromise() {

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
        const bookSearchPromise=Math.random()>0.5
        if(bookSearchPromise)
        {
            resolve('Book found')
        }
        else{
            reject("Book not found")
        }
    },3000)
    })

      
}
bookSearchPromise()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})