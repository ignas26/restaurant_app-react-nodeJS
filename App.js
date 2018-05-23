const express = require('express');
const app = express();

const port = process.env.PORT || 9000;

app.use = (express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
res.send('kol kas tvarkoma')
});

app.get('/api/welcome', (req, res)=>{
res.json({
  message: 'sveiki',
  url:'/images/md.jpg'
})
});

app.listen(port, ()=>{
});