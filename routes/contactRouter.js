const express=require('express')
const Router=express.Router()
const {getContact}=require('../controllers/contactController')

Router.route('/').get(getContact).post((req,res)=>{
    const {name,email}=req.body
    res.status(200).json(
        {
            message:`${name,email}`,
            name:'post'
        }
      )
})
Router.route('/:id').put(getContact).delete((req,res)=>{
    res.status(200).json(
        {
            message:`delete ${req.params.id}`,
            name:'delete'
        }
      )
})
module.exports=Router