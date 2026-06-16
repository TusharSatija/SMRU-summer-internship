let a=true;
//
setTimeout(() => {
    let count=1;
    while(a)
    {
        console.log(count);
        count++;
    }
}, 0);
a=!a;    //toggle