let express=require('express');
let app=express();
let path=require('path');
app.use(express.static(path.join(__dirname,"public")));


app.get('/',(req,res)=>{
    res.send("this is a login page");
})
 
app.listen(3002,()=>{
    console.log("app is running at port 3002");
})