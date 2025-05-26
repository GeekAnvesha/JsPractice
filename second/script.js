const source1=document.querySelector('.img1')
const source2=document.querySelector('.img2')
const action=document.querySelector('button')

action.addEventListener('click', function(){
// alert(source1.src)
var click=source1.src
source1.src=source2.src
source2.src=click



})