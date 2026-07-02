let express=require('express');
let app=express();

app.use((req,res,next)=>{
    console.log("first middleware");
    next()
})
app.use((req,res,next)=>{
    console.log("second middleware");
    next()
})

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/login',(req,res)=>{
    res.send("this is a login page");
})
 
// function middleware(req,res,next){
//     console.log("middleware called");
//     next();
// }
 

app.listen(3001,()=>{
    console.log("app is running at port 3001");
})