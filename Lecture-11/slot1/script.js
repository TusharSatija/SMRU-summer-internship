// scope of let -> block scope 
let d;
console.log(d)

{
    let b=20;
    console.log(b);
}
console.log(b);

// scope of var -> functional scope

function fun()
{
    var a=true;
    console.log(a);
}
fun();
console.log(a);

