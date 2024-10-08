import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json())
app.use("/api/post",postRoute)
app.use("/api/auth",authRoute)

app.listen(5500, ()=>{
    console.log("Server is Running!!!");
})