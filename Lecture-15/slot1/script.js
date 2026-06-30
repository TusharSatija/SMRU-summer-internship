let h1=document.getElementsByName('h1');
console.log(h1);
console.log(Array.from(h1));

let a=document.querySelector('article');
console.log(a);

// let box=document.getElementById('box');
let box=document.querySelector('#box');
console.log(box);
box.style.color="red"

// let list=document.getElementsByClassName('list')
let list=document.querySelectorAll('.list');
console.log(list);

let newdiv=document.createElement('div');
console.log(newdiv);

newdiv.textContent="this is a div";

document.body.appendChild(newdiv);

newdiv.style.backgroundColor="orange";
newdiv.style.border='2px solid black';
newdiv.style.color="yellow"
