let fs=require('fs');
let path=require('path');
let p=path.join(__dirname,"a.txt");
console.log(p);
// console.log(fs);
fs.readFile(p,(err,data)=>{
    if(err)
        console.log(err)
    else
        console.log(data.toString());
},)