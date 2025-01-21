import express from "express"
const app= express()
import cors from "cors"
import {config} from "dotenv"

app.use(express.json())
app.use(cors())
config()

import "./Config/Config.js"
import { route } from "./Router/router.js"
app.use("/products6",route)
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})