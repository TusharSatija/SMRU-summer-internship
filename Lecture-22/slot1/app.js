let express=require('express');
let app=express();
let bodyPasrser=require('body-parser');
let path=require('path');
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,"views"));

//middleware
app.use(bodyPasrser.urlencoded({extended:true}));

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/submit',(req,res)=>{
    res.send("data recieved successfully ");
});

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/submit',(req,res)=>{
    let {Uname,upass}=req.body;
    console.log(req.body);
    res.send("user registered successfully !!!")
})

app.listen(3001,()=>{
    console.log("app is running at port 3001 ");
})