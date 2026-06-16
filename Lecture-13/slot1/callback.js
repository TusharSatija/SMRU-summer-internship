function download(url,down)
{
    console.log("img start downloading ....");
    setTimeout(()=>{
        let img=url.split('/').pop();
        down(img);
    },2000);
}

function compress(img,cmp)
{
    console.log("image start compressing..");
    setTimeout(()=>{
        let cimg=img.split('.')[0]+".zip";
        cmp(cimg);
    },1000);
}

function upload(cimg,upl)
{
    console.log("image start uploading...");
    setTimeout(() => {
        let u="http://localhost:3000/"+cimg;
        upl(u);
    }, 2000);
}

let url="http://www.facebook.com/photo.jpg";

download(url,function down(img){
    console.log("img downloaded successfully ",img);
    compress(img,function cmp(cimg){
        console.log("file commpressed successfully ..",cimg);
        upload(cimg,function upl(u){
            console.log("img uploaded successfully ..",u)
        })
    })
})
