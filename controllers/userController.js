const User=require('../models/User');
exports.registerUser=async(req,res)=>{
    const{username,password}=req.body;
    try{
        const userExists=await User.findOne({username});
        if(userExists){
            return res.status(400).json({message:'User already exist'});
        }
        const user=new User({username,password});
        await user.save();
        res.status(201).json({message:'User registered'});
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};