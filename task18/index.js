const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);
function getTodos() {
    // Write your code here
  axios.get("https://crudcrud.com/api/187f8eb5169d4283a66cb6258eeee53a/Payload")
  .then((res)=> console.log(res))
   .catch((err)=> console.log(err))
  }
  
  function postTodo() {
   axios.post("https://crudcrud.com/api/187f8eb5169d4283a66cb6258eeee53a/Payload",{
    title: "Learn Axios", 
    completed: false
   })
   .then((res)=> console.log(res))
   .catch((err)=> console.log(err))
  }
  
  function putTodo() {
    axios.put("https://crudcrud.com/api/187f8eb5169d4283a66cb6258eeee53a/Payload/66260abdb6787603e855eae9",{
      title: "Learn Axios", 
      completed: true
    })
    .then((res)=> console.log(res))
   .catch((err)=> console.log(err))
  }
  
  function deleteTodo() {
    axios.delete("https://crudcrud.com/api/187f8eb5169d4283a66cb6258eeee53a/todo/662608e6b6787603e855eae5")
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
  }
