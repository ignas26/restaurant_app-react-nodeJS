const express = require('express');
const router = express.Router();
const fs = require('fs');
const categories = require('../data/categories');
const menu = require ('../data/menu');


router.get('/api/welcome', (req, res)=>{
  res.json({
    message: 'sveiki',
    url:'/images/md.png'
  })
});

router.get('/api/categories', (req, res)=>{
  res.json({categories})
});
router.get('/api/menu', (req,res)=>{
  res.json({menu})
});

router.post('/api/orders', (req, res)=>{
  const {name, address, phone, orders} = req.body;
  const ordersString = orders.reduce((total, item)=>{
    return total + `${item.name} ${item.price} \n`
  },'');
  const order =
      `name: ${name} \n
  address: ${address} \n 
  phone: ${phone} \n
  orders: \n
  ${ordersString}
  `;

  fs.appendFile('order.txt', order, (err)=>{
    if (err) console.log(err);
  });
  res.send('ok')
});

module.exports = router;