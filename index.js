import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cityData from './data/cityData.js'

dotenv.config()

const app = express()
app.use(cors())

app.get("/api/cities", (req,res)=>{
    res.json(cityData)
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Serving on port ${port}`);
})