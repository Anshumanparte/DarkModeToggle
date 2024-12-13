var moon=document.querySelector('#moon');
var sun=document.querySelector('#sun');

var swith=document.querySelector('#switch');

moon.addEventListener('click',()=>{
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    moon.style.display='none';
    sun.style.display='block';
    swith.style.backgroundColor='black';
    
    
})
sun.addEventListener('click',()=>{
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    sun.style.display='none';
    moon.style.display='block';
    swith.style.backgroundColor='white';
   
})