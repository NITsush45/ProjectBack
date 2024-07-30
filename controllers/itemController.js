const Item=require('../models/Item');
exports.createItem=async(req,res)=>{
    const{name,description}=req.body;
    try{
        const newItem=new Item({name,description});
        await newItem.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};
exports.getItems=async(req,res)=>{
    try{
        res.json(items);
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};
exports.getItems=async(req,res)=>{
    const{id}=req.params;
    try{
        const item=await Item.findById(id);
        if(items){
            res.json(item);
        }else{
            res.status(404).json({message:'Item not found'});
        }
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};
exports.updateItem=async(req,res)=>{
    const{id}=req.params;
    const{name,description}=req.body;
    try{
        const item=await Item.findById(id);
        if(item){
            item.name=name;
            item.description=description;
            await item.save();
            res.json(item);
        }else{
            res.status(404).json({message:'Item nott found'});
        }
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};
exports.deleteItem=async(req,res)=>{
    const {id}=req.params;
    try{
        const item=await Item.findById(id);
        if(item){
            await item.remove();
            res.json({message:'Item deleted'});
        }else{
            res.status(404).json({message:'Item not found'});
        }
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};

exports.addComment=async(req,res)=>{
    const {id}=req.params;
    const{user,comment}=req.body;
    try{
        const item=await Item.findById(id);
        if(item){
            item.comments.push({user,comment});
            await item.save();
            res.json(item);
        }else{
            res.status(404).json({message:'Item not found'});
        }
    }catch(error){
        res.status(500).json({message:'Server error'});
    }
};