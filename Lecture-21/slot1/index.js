require("dotenv").config();

console.log(`what's your good name :${process.env.name}`)

async function fetchapi()
{
    console.log(process.env.api);
    let res=await fetch(process.env.api);
    let data =await res.json();
    console.log(data);
}

fetchapi();