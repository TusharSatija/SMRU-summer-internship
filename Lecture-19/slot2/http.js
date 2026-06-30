let http=require('http');
let server=http.createServer((req,res)=>{

        res.write("hello from server");
        res.end();
})

server.listen(3000,()=>{
    console.log("server. running at port 3000");
})

// http://localhost:3000