let p1= new Promise((res,rej)=>{
    res();
});

console.log(p1);
let p2= new Promise((res,rej)=>{
    rej();
});
console.log(p2);

let p3= new Promise((res,rej)=>{
 
});

console.log(p3);