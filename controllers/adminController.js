const Admin=require('../models/Admin');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
exports.adminLogin=async(req,res)=>{
    const{username,password}=req.body;
    try{
        const admin=await Admin.findOne({username});
        if(admin &&(await bcrypt.compare(password,admin.password))){
            const token =jwt.sign({id:admin_id},process.env.JWT_SECRET,{expiresIn:'1h'});
                res.json({token});
            }else{
res.status(401).json({message:'Invalid credentials'});
            }
        }catch(error){
            res.status(500).json({message:'server error'});
        }
    };