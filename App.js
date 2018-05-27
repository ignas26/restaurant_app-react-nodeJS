const express = require('express');
const app = express();
const categories = require('./data/categories');

const port = process.env.PORT || 9000;

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
res.send('kol kas tvarkoma')
});

app.get('/api/welcome', (req, res)=>{
res.json({
  message: 'sveiki',
  url:'/images/md.jpg'
})
});

app.get('/api/categories', (req, res)=>{
res.json({categories})
});

app.listen(port, ()=>{
});