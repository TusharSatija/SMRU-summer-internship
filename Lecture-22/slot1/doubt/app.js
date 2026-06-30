let express=require('express');
let app=express();
let path= require('path');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));

let todo=[
    { tid:1212,task:"go to gym",status:"pending"},
    {  tid:2222,task:"reading books",status:"done"},
    {  tid:3333,task:"coding",status:"done"}
];

app.get('/todos',(req,res)=>{
    res.render("todos",{todo});
})

app.listen(3000,()=>{
    console.log("app is running at port 3000");
})