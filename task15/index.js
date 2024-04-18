async function happyMeal() {
 try{
    function orderPizza() {

        return new Promise((resolve, reject) => {
       
         setTimeout(() => {
       
          const pizzaDelivered = Math.random() > 0.5;
       
          if (pizzaDelivered) {
       
           resolve("Pizza has been delivered!");
       
          } else {
       
           reject("Pizza delivery failed.");
       
          }
       
         }, 2000);
       
        });
       
       }
       
       
       
       function orderDessert() {
       
        return new Promise((resolve, reject) => {
       
         setTimeout(() => {
       
          const dessertDelivered = Math.random() > 0.5;
       
          if (dessertDelivered) {
       
           resolve("Dessert has been delivered!");
       
          } else {
       
           reject("Dessert delivery failed.");
       
          }
       
         }, 1000);
       
        });
       
       }
       const step1=await orderPizza()
       console.log(step1)
       const step2=await orderDessert()
       console.log(step2)
       happyMeal()
       
 }
 catch(error){
    console.log(error)
 }
  }
  
