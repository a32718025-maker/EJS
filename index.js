const express= require("express");
const app=express();
const path=require("path");

const port=8000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/ig/:username",(req,res)=>{  //adding instagram.ejs
    const followers = ["adam","bob","steve","abc"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,followers});
});


app.get("/:username,/:id",(req,res)=>{  // path parameters
    let{ username, id }=req.params;
    let htmlStr=`<h1> welocome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search",(req,res)=>{  //query Strings
    console.log(req.query);
    let{q}=res.query;
    if(!q){
        res.send("<h1> nothing searched</h1>")
    }
    res.send("sucess");
});

app.get("/rolldice",(req,res)=>{              //passing data to ejs
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});

});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
