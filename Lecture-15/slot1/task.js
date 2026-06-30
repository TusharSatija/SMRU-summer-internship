let inc=document.querySelector('#inc');
let dec=document.querySelector('#decr');
let span=document.querySelector('span');

let count=0;
span.innerText=count;
console.log(inc)
console.log(dec)
console.log(span)
inc.addEventListener('click',(e)=>{
    count++;
    span.innerText=count;
    console.log(count);
})

dec.addEventListener('click',(e)=>{
    count--;
    span.innerText=count;
    console.log(count);
})
 