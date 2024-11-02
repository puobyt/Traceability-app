const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    finished_goods_name : {
        type: String,
      },
      batch_number: {
        type: String,
      },
      production_date: {
        type: Date,
      }, quantity_produced: {
          type: String,
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

module.exports = mongoose.model('FinishedGoods', schema);
