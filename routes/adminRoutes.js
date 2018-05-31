const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');


router.post('/api/admin/additem', async (req, res)=>{
  const item = new Item({
    name:req.body.name,
    price:req.body.price,
    category:req.body.category
  });
  await item.save();
    res.send({message:'saved succesfully',
      name:item.name,
      price: item.price,
      category:item.category
    });
});

router.get('/api/admin/items', async (req, res)=>{
  const items = await Item.find({});
res.send({items:items})
});

router.post('/api/admin/remove/item', async (req, res)=>{

  const item = await Item.findOne({name: req.body.name});
  item.remove();
  res.send(req.body);
});

router.post('/api/admin/update/item', async (req, res)=>{
  const item = await Item.findOne({name: req.body.name});
  item.price = req.body.price;
  await item.save();
  res.send('ok')
});

module.exports = router;