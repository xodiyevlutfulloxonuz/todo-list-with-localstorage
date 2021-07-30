const nameInput=document.querySelector('#name')
const surnameInput=document.querySelector('#surname')
const jobInput=document.querySelector('#job')
const list=document.querySelector('#list')
const form=document.querySelector('#form')
const btns=document.querySelectorAll('#btn')

let users=[]
 if(localStorage.getItem('users')){
     users=JSON.parse(localStorage.getItem('users'))
 }
 driverFunction(users)

function driverFunction(array){
    list.innerHTML=null
   array.forEach((item,index)=>{
       
        list.innerHTML+=`
          <tr>
          <td>${index+1} </td>
          <td>${item.name} </td>
          <td>${item.surname} </td>
          <td>${item.job} </td>
          <td>  <button class="btn btn-primary" > delete</button> </td>
          
          </tr>
        `

   })


}




form.addEventListener('submit',(e)=>{
    e.preventDefault()
     if(nameInput.value!=="" && surnameInput.value!=="" && jobInput.value!==""){
        let user={
            id:users.length+1,
            name:nameInput.value,
            surname:surnameInput.value,
            job:jobInput.value
        }
        users.push(user)
        driverFunction(users)
        localStorage.setItem('users',JSON.stringify(users))
        // nameInput.value=null
        // surnameInput.value=null
        // jobInput.value=null
          form.reset()
        
        
     }
     else{
         alert("Iltimos input ichini barchasini toldiring")
     }

})



