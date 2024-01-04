const getContact=(req,res)=>{
    res.status(200).json(
        {
            message:'contact',
            name:'get'
        }
      )
}
module.exports={getContact}