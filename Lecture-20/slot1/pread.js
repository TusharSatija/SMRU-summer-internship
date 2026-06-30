let fs=require('fs/promises');
let path=require('path');

fs.readFile(path.join(__dirname,"w.txt"))
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err);
})