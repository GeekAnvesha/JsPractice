const btn=document.querySelector('button')
const target=document.querySelector('body')

btn.addEventListener('click',function(){
const r=Math.floor(Math.random() * 256);

const g=Math.floor(Math.random() * 256);
const b=Math.floor(Math.random() * 256);


// alert(r + ','+ g+','+b);
const randomColor=`rgb(${r},${g},${b})`;
// alert(randomColor)
target.style.backgroundColor=randomColor
})