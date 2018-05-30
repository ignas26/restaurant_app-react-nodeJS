const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');


router.post('/api/admin/additem', async (req, res)=>{
  const item = new Item({
    name:req.body.name,
    price:req.body.price
  });
  await item.save();
    res.send({message:'new item created'});

  res.send('ok')
});




module.exports = router;