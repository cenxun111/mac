const mongoose = require('mongoose')
const postSchmea = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },
    
},
{timestamps:true}
)

module.exports = mongoose.model("Post",postSchmea)