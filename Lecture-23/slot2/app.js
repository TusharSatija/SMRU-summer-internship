let express=require('express');
let app=express();
let bodyParser=require('body-parser');
let methodoverride=require('method-override');
let path=require('path'); 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodoverride('_method'));
let p=[
    {
        P_img:"https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
        P_id:1221,P_name:"Phone" ,P_price:30000 ,P_qty:10
    },
    {
        P_img:"https://images.unsp~lash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",P_id:1111,P_name:"Earbuds" ,P_price:2000 ,P_qty:3
    },
    {
        P_img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",P_id:1112,P_name:"smartwatch" ,P_price:4000 ,P_qty:4
    },
    {
        P_img:"https://images.unsplash.com/photo-1717865499857-ec35ce6e65fa?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",P_id:2221,P_name:"Macbook",P_price:150000 ,P_qty:2
    }
]

app.get('/products',(req,res)=>{
    res.render('index',{p});
})


app.get('/product/new',(req,res)=>{
    res.render('new');
})


app.get('/product/:id',(req,res)=>{
    let {id}=req.params;
     
   let r1= p.filter((data)=>{
        return data.P_id==id;
    });
    console.log(r1.length); 
    if(r1.length==0)
    {
        res.send("product is not available right now")
    }
    else
         res.render('show',{r1});

});

app.put('/product/:id',(req,res)=>{
    let {E_name,E_price,E_qty,E_id,E_img}=req.body;
    let e=p.filter((data)=>{
        return  data.P_id!=req.params.id;
    });
    //arry update
    p=e;
    p.push({
        P_id:E_id,
        P_name:E_name,
        P_qty:E_qty,
        P_img:E_img,
        P_price:E_price
    });
    res.redirect('/products');

})

app.get('/product/:id/edit',(req,res)=>{
    let {id}=req.params;
     
   let r= p.filter((data)=>{
        return data.P_id==id;
    });
    console.log(r.length); 
    if(r.length==0)
    {
        res.send("invalid product id !! ")
    }
    else
         res.render('edit',{r});
})

app.post('/products',(req,res)=>{
    let {Pname,Pid,Pqty,Pprice,Pimg }=req.body;
    p.push({
        P_id:Pid,
        P_name:Pname,
        P_qty:Pqty,
        P_price:Pprice,
        P_img:Pimg
    });
    res.redirect('/products');
})

app.listen(4000,()=>{
    console.log("app is running at  port 4000");
})