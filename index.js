const express= require("express"); //imports Express framework it helps to create a server and configure it
const app=express(); //create an express application
const path=require("path"); //import built-in path that help us to construct file and dir paths

const port=8000;     //our servr will run on port 8000

 //app.use(express.static("public"));  // tell=files insidethe  public  folder accesible to the browser
app.use(express.static(path.join(__dirname,"/public/js"))); //tell express to make static files (css,imga and js) inside the public folder accesible to the browser
app.use(express.static(path.join(__dirname,"/public/css")));//public/js  folder accesible to the browser by specifying their directory path

app.set("view engine","ejs");    //express mein ejs template ko set krna (html ke andar js code likh ske)
app.set("views",path.join(__dirname,"/views")); //set the template direc

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/ig/:username",(req,res)=>{  //adding instagram.ejs
    //const followers = ["adam","bob","steve","abc"];
   // let {username}=req.params;
  //  res.render("instagram.ejs",{username,followers});
  let {username}=req.params;

  const instaData=require("./data.json");
  const data= instaData[username];
  
  if(data){
  res.render("instaram.ejs", {data});
  }else{
    
res.render("error.ejs");
  }
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
