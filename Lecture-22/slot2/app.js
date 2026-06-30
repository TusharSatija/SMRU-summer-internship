let express=require('express');
let app=express();
let path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
let p=[
    {
        P_img:"https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
        P_id:1221,P_name:"Phone" ,P_price:30000 ,P_qty:10
    },
    {
        P_img:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",P_id:1221,P_name:"Earbuds" ,P_price:2000 ,P_qty:3
    },
    {
        P_img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",P_id:1221,P_name:"smartwatch" ,P_price:4000 ,P_qty:4
    },
    {
        P_img:"https://images.unsplash.com/photo-1717865499857-ec35ce6e65fa?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",P_id:1221,P_name:"Macbook",P_price:150000 ,P_qty:2
    }
]

app.get('/products',(req,res)=>{
    res.render('index',{p});
})


app.listen(4000,()=>{
    console.log("app is running at  port 4000");
})