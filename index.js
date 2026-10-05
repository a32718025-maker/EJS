const express= require("express");
const app=express();
const path=require("path");

const port=8000;

app.set("view engine","ejs");
app.set("views",pathjoin(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home");
});


app.get("/hello",(req,res)=>{
    res.send("hello");
});



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
