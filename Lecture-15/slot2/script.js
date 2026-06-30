let inp=document.querySelector('input');
let btn=document.querySelector('button');
let section=document.querySelector('section');
console.log(inp , btn);

btn.addEventListener('click',async ()=>{
    let data=inp.value.trim();
    console.log(data);
    if(!data)
        return;
    section.innerHTML="";
    let url=`https://api.tvmaze.com/search/shows?q=${data}`
        //fetch api
           let res=await fetch(url);
            let final =await res.json();
            console.log(final);
            let card=document.createElement('article');

        final.forEach(item => {
            const show=item.show;
            card.innerHTML=`
            <img src= ${show.image?.medium || ""} alt="nothing">
            <h2> Name : ${show.name}</h2>
            <h4> Name : ${show.type}</h4>
            <h6> Name : ${show.language}</h6>
            `
            section.appendChild(card);
        });

})

