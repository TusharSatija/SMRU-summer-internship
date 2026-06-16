function download(url)
{
    return  new Promise((res,rej)=>{
        let img=url.split('/').pop();
        if(img.split('.').pop()!='jpg')
        {
            rej("not is required format");
        }
        else{
            setTimeout(() => {
                let i=img.split(".")[0];
                res(i);
            }, 2);
        }
    })
}
let url="http://www.facbook.com/flower.png";
download(url)
.then((img)=>{
    console.log("image name",img);
})
.catch((err)=>{
    console.log(err);
})