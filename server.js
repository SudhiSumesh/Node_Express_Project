const express =require('express')
const dotenv=require('dotenv').config()
const contactRoute=require('./routes/contactRouter')
const app=express()
app.use(express.json())

const port=process.env.PORT ||3000
//server
app.listen(port,()=>console.log(`server is running on ${port}`))

// contact route
app.use('/api/contacts',contactRoute)

