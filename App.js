const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRoutes');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;




mongoose.connect('mongodb://admin:adminas1@ds241530.mlab.com:41530/restaurant_db');
mongoose.connection
    .once('open', ()=>console.log('connected to DB'))
        .on('error', (e) => console.log('e'));

const port = process.env.PORT || 9000;




app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', publicRoutes);
app.use('/', adminRoutes);


app.listen(port, ()=>{
});