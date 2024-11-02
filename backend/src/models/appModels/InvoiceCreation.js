
    const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  invoice_number : {
    type: String,
  },
  invoice_date: {
    type: Date,
  },
  customer_name: {
    type: String,
  }, 
  customer_address: {
      type: String,
    },
  item_name: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
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
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('InvoiceCreation', schema);
