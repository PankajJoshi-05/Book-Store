const express= require("express");
const app=express();
require("dotenv").config();
require("./Connection/Connection")
const user =require("./routes/user");
const book=require("./routes/book");
const fav=require("./routes/fav");
const cart=require("./routes/cart");
app.use(express.json());

app.use("/api/v1",user);
app.use("/api/v1",book);
app.use("/api/v1/",fav);
app.use("/api/v1",cart);

app.listen(process.env.PORT,()=>{
    console.log(`server started ${ process.env.PORT}`);
})