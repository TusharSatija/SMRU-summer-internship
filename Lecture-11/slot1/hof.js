function a(d)   //hof
{
    console.log("inside a");
    d();  //call back function
}

function b()
{
    console.log("inside b");
}

a(b);

// hof: when we pass a function as an argument inside a function is known as hof

// hof : when an outer function return a complete inner function is known as hof