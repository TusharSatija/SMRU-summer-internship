let fs=require('fs');
let path=require('path');
let p=path.join(__dirname,'w.txt');
fs.writeFile(p,"I am learing nodejs fs  writefile",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("done successfully ..")
})