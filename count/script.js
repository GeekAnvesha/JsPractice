const add=document.querySelector('.add')
const sub=document.querySelector('.sub')
const counter=document.querySelector('.counter')
const reset= document.querySelector('.reset')
var x=0;
add.addEventListener('click',function(){
x++
  
//     alert(x)
 counter.innerText='Count is : '+x
 counter.style.backgroundColor='Green'

})

sub.addEventListener('click',function(){
x--
counter.style.backgroundColor='red'
 counter.innerText='Count is : '+x
})
reset.addEventListener('click', function(){
    x=0;
 counter.innerText='Count is : '+x
 counter.style.backgroundColor='white'
})



