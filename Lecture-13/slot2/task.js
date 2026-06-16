function Number(num)
{
    return new Promise((res,rej)=>{
        if(num%2==0)
        {
            res("even number");
        }
        else{
            rej("odd number");
        }
    })
}
let num=Math.floor(Math.random()*10);
Number(num)
.then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.log(msg);
})
.finally(()=>{
    console.log("number is ",num);
})