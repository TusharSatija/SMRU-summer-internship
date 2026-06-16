console.log("one");

setTimeout(()=>{
    console.log("one.one");
},3000);

console.log("two");

setTimeout(()=>{
    console.log("two.two");
},0);

console.log("three");

setTimeout(()=>{
    console.log("three.three");
},1000);




// setTimeout(() => {
//     console.log("execute after 2 sec");
// },2000);

// console.log("hello");