//<button type="submit">click</button>
// <input type="text" name="" id=""></input>
let btn=document.querySelector('button');
let inp=document.querySelector('input');
console.log(btn);
console.log(inp);

btn.addEventListener('dblclick',(e)=>{
    console.log(e.type, e.target);
    console.log("clicked")
})
inp.addEventListener('keydown',(e)=>{
    console.log(e.type , e.key);
})

// inp.addEventListener('keyup',(e)=>{
//     console.log(e.type , e.key);
// })