const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.DB_HOST);
  mongoose.connection
      .once('open', () => console.log('connected to DB'))
      .on('error', (e) => console.log(e));
  mongoose.Promise = global.Promise;
};