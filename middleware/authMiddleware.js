const jwt=require('jsonwebtoken');
const protect=(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.admin=decoded;
            next();
        }catch(error){
            res.status(401).json({message:'Not authorized,authentication failed'});
        }
    }
    if(!token){
        res.status(401).json({message:'Not authorized,no authentication'});
    }
};
module.exports={protect};