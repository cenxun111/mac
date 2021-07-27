const Users = require('../models/userModel')
const Posts = require('../models/postModel')

const postCtrl = {
    createNewsPost:async (req,res) => {
        const newPost = new Posts(req.body);
        try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    allPost: async (req,res) =>{
        try{
            const posts = await Posts.find();
            res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err);
    }
    },

    singlePost: async (req,res) => {
        try{
            const post = await Posts.findById(req.params.id)
            res.status(200).json(post)
        
    } catch(err) {
        return res.status(500).json(err)
    }
},
}

module.exports = postCtrl