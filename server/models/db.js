const mongoose = require('mongoose');
require('../config/config');
const db = mongoose.connection;

const conn = mongoose.connect(process.env.MONGO_URL, {
});

db
  .once('open', () => {
    console.log("connected");
  })
  .on('error', (error) => {
    console.log(error);
  });







