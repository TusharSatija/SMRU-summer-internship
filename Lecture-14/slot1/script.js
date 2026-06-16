let url="https://api.tvmaze.com/shows";
async function fetchdata()
{
    let res= await fetch(url);
    let data=await res.json();
    console.log(data);
}
fetchdata();