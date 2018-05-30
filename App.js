const express = require('express');
const app = express();
const categories = require('./data/categories');
const menu = require ('./data/menu');
const bodyParser = require ('body-parser');
const fs = require('fs');

const port = process.env.PORT || 9000;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
res.send('kol kas tvarkoma')
});

app.get('/api/welcome', (req, res)=>{
res.json({
  message: 'sveiki',
  url:'/images/md.png'
})
});

app.get('/api/categories', (req, res)=>{
res.json({categories})
});
app.get('/api/menu', (req,res)=>{
  res.json({menu})
});

app.post('/api/orders', (req, res)=>{
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


app.listen(port, ()=>{
});