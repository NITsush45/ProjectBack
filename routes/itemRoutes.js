const express=require('express');
const{
    createItem,
    getItems,
    getItem,
    updateItem,
    deleteItem,
    addComment,
}=require('../controllers/itemController');
const {protect}=require('../middleware/authMiddleware');
const { get } = require('mongoose');
const router=express.Router();
router.route('/')
.post(protect,createItem)
.get(getItems);
router.route('/:id')
.get(getItem)
.put(protect,updateItem)
.delete(protect,deleteItem);
router.route('/:id/comments')
.post(addComment);
module.exports=router;