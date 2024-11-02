const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    product_name: {
    type: String,
  },
  quantity: {
    type: String,
  },
  price: {
    type: String,
  },
  supplier: {
    type: String,
  },
  date_recieved:{
    type: Date,
  },
 
  
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  assigned: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  removed: {
    type: Boolean,
    default: false,
  },
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('CurrentStock', schema);
