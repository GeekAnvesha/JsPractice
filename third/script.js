const user_name=document.querySelector('.user')
const pass=document.querySelector('.pass')
const submit=document.querySelector('form')

const msg1=document.querySelector('.p1')
const msg2=document.querySelector('.p2')

submit.addEventListener('submit', function(event){
    event.preventDefault() //prevents cancelable events
    // alert('button')
    if(user_name.value==''  ){
        
        msg1.innerText="please enter a value in username"
    }
        
   else if (pass.value==''){
       msg2.innerText="please enter a value in password"
    }
    else if(pass.value.trim().length!=8){
         msg2.innerText="password length must be 8"
    }
    else {
        alert('valid')
    }

    
})

