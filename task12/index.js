
const projectorPromise =new Promise((resolve,reject)=>{
      setTimeout(()=>{
      const payback=Math.random()>0.5
      if(projectorPromise)
      {
          resolve("Projector rented successfully")
      }
      else{
          reject("Error: Projectors out of stock")
      }
  },1000)
  })
  const pizzasPromise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const pizzasPromise=Math.random()>0.5
    if(pizzasPromise)
    {
        resolve("Pizzas delivered at time")
    }
    else{
        reject("Error: Pizzas not delivered on time")
    }
},2000)
})
const friendsPromise =new Promise((resolve,reject)=>{
  setTimeout(()=>{
  const friendsPromise=Math.random()>0.5
  if(friendsPromise)
  {
      resolve("Both friends available")
  }
  else{
      reject("Error: Both friends not available")
  }
},3000)
})

Promise.all([projectorPromise,pizzasPromise,friendsPromise])
.then((result)=>{
result.forEach((result)=>{
  console.log(result)
})
})
.catch((err)=>{
  console.log(err)
})