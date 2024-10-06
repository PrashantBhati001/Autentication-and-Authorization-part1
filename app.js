const cookieParser = require("cookie-parser");
const express=require("express")
const app=express();

app.use(cookieParser())

app.get("/",(req,res)=>
{
    res.cookie("name","Prashant")        //res.cookie se set karte hain and req.cookies se read karte hain cookie ko
    res.send("done bro")

})

app.get("/bcrypt",(req,res)=>{
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
})

// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//     // result == true                               
// });

//The above is used for comparing


app.get("/cookie",(req,res)=>{

    const token=jwt.sign({email:"prashant@gail.com"},"secret")
    res.cookie(token)
    res.send("done")

})

app.get("/read",(req,res)=>{

      const data=jwt.verify(req.cookies.token,"secret")
      console.log(data)
})