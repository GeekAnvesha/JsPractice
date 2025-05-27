const clr1=document.querySelector('.stop')
const clr2=document.querySelector('.wait')
const clr3=document.querySelector('.go')
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')




btn1.addEventListener('click', function(){
    clr1.style.backgroundColor='red'
   clr2.style.backgroundColor='white'
      clr3.style.backgroundColor='white'

    
})
btn2.addEventListener('click', function(){
    clr2.style.backgroundColor='yellow'
      clr1.style.backgroundColor='white'
      clr3.style.backgroundColor='white'
  
})
btn3.addEventListener('click', function(){
     clr3.style.backgroundColor='green'
      clr2.style.backgroundColor='white'
      clr1.style.backgroundColor='white'
  
})