const mongoose = require ("mongoose");
const express = require("express");
const cors =require("cors");
const studentsRouters = require("./controller/studentsRouters")
const app = express();

mongoose.set("strictQuery",true);

const uri ="mongodb+srv://aswin:aswin97@cluster0.ugichft.mongodb.net/MyHighSchool";

mongoose.connect(uri);

const db = mongoose.connection;

db.on("open",()=>{
    console.log("Database connected");

});
db.on("error",(error)=>{
    console.log("error while connecting to database", error);

});
app.use(express.json());
app.use(cors());

app.use("/students", studentsRouters)
const port =5000;
app.listen(port,()=>{
    console.log("server listening on port",port);
});