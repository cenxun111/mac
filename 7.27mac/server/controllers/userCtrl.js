 const Users = require('../models/userModel')

 const userCtrl = {
     getUser:async(req,res) => {
         try {
            const user = await Users.findById(req.params.id).select('-password')
            if(!user) return res.status(400).json({msg:"User does not exist."})
            res.json({user})
         }catch(err){
             return res.status(500).json({msg:err.message})
         }
     }
 }
module.exports = userCtrl