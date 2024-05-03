function handleFormSubmit(event){
  event.preventDefault()
  const userdetail={
  user:event.target.username.value,
  email:event.target.email.value,
  phone:event.target.phone.value
  }
  axios.post("https://crudcrud.com/api/ed733e8bface479fbcc488facd1506c7/userdata",userdetail)
  .then((result)=>displayuser(result.data))
  .catch((err)=>{console.log(err)})
  document.getElementById("username").value=""
  document.getElementById("email").value=""
  document.getElementById("phone").value=""
  
  }
  window.addEventListener("DOMContentLoaded",()=>{
      axios.get("https://crudcrud.com/api/ed733e8bface479fbcc488facd1506c7/userdata")
      .then((result)=>{
          console.log(result)
          for(let i=0;i<result.data.length;i++){
              displayuser(result.data[i])
          }
      })
  })
  
  
  
  
  
  
  
  
  
  function displayuser(userdetail){
  const useritem=document.createElement('li')
  useritem.innerHTML=`${userdetail.user}-${userdetail.email}-${userdetail.phone}`
  // useritem.appendChild(document.createTextNode(`${userdetail.user}-${userdetail.email}-${userdetail.phone}`))
  let dlbtn=document.createElement("button")
  dlbtn.innerHTML="Delete"
  useritem.appendChild(dlbtn)
  
  
  let Edbtn=document.createElement("button")
  Edbtn.innerHTML="Edit"
  useritem.appendChild(Edbtn)
  
  dlbtn.addEventListener("click",function(event){
      const userToDeleteId = userdetail._id;
     userlist.removeChild(event.target.parentElement)
     axios
     .delete(`https://crudcrud.com/api/ed733e8bface479fbcc488facd1506c7/userdata/${userToDeleteId}`)
     .then((result)=>{
      console.log(result)
      useritem.remove();
  })
  
  .catch((err)=>{console.log(err)})
  })
  Edbtn.addEventListener("click",function(event){
      
      userlist.removeChild(event.target.parentElement)
     localStorage.removeItem(userdetail.email);
     document.getElementById("username").value = userdetail.user;
     document.getElementById("email").value = userdetail.email;
     document.getElementById("phone").value =userdetail.phone;
  })
  userlist=document.querySelector('ul')
  userlist.appendChild(useritem)
  }
  