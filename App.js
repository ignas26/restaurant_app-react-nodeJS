const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();
require('./database/connectTo')();

const port = process.env.PORT || 5000;


app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', publicRoutes);
app.use('/', adminRoutes);

if(process.env.NODE_ENV==='production'){
  app.get('/*', (req, res)=>{
    res.sendFile(__dirname+'/client/build/index.html')
  })
}

const server = app.listen(port, ()=>{
});

const io = require('socket.io')(server);

io.on('connection', (socket)=>{
  console.log('user connected');
  socket.on('test', (data)=>{
    console.log(data);
  })
});


app.set('socketio', io);