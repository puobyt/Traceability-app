const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    purchase_order_number: {
    type: String,
  },
  date: {
    type: Date,
  },
  name_of_the_firm: {
    type: String,
  },
  address: {
    type: String,
  },
  contact: {
      type: String,
    },
    contact_person_name: {
      type: String,
    },
    contact_person_details: {
      type: String,
    },
    vendor_id: {
      type: String,
    },
    product_name: {
      type: String,
    },
  batch_number: {
    type: String,
  },
  mfg_date: {
      type: Date,
    },
  quantity: {
      type: String,
    },
  price: {
      type: String,
    },
  pan: {
      type: String,
    },
  gst: {
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

module.exports = mongoose.model('PurchaseOrderCreation', schema);
