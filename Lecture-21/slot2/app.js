let express=require("express");
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,'views'));

let todo=[
    {
        tid:1212,task:"Go to Market",status:true
    },
    {
        tid:2345, task:"buy vegetable",status:false
    },
    {
        tid:1456,task:"go to gym",status:true
    }
 ]

app.get('/todos',(req,res)=>{
    res.render('todo1',{todo})
})



let key="thisisasecretkey";



app.get("/",(req,res)=>{
    res.send("this is a / route");
})
app.get('/login',(req,res)=>{
    res.render('index',{key});
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})