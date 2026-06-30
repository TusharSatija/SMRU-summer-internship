let express=require("express");
let app=express();
let path=require('path');
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,'views'));

app.get('/product',(req,res)=>{
    res.send("this is a product route");
});

app.get('/login',(req,res)=>{
    res.send("this is a login page");
})
//  http://localhost:3000/login

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})