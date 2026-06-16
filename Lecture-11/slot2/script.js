let arr=[1,2,3,4,5,6];

let sum=arr.reduce((acc,cur)=> acc+cur,0);
console.log(sum)

let res1=arr.filter((i)=>{
    return i%2==0;
});
console.log(res1);1

let res=arr.map((i)=>{
    return i;
})
console.log(res);



