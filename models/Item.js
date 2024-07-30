const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    rating:{type: Number, default:0},
    comments:[{user:String,comment:String}],
});
const Item=mongoose.model('Item', itemSchema);
module.exports=Item;