const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage});


router.post('/api/admin/additem', upload.single('itemimage'), async (req, res)=>{
  try {
    console.log(req.file);


const item = new Item({
  name:req.body.name,
  price:req.body.price,
  category:req.body.category,
  img: '/uploads/'+req.file.originalname
});
await item.save();
res.send({
  message:'saved succesfully',
  name:item.name,
  price: item.price,
  category:item.category,
  img:item.img
});
  }catch (err){
    console.log('err.message');
    res.status(400).send({message:'something went wrong'})
  }
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