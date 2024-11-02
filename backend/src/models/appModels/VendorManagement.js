
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
    name_of_the_firm : {
    type: String,
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
  contact_person_name:{
    type: String,
  },
  contact_person_details:{
    type:String,
  },
  bank_details:{
    type:String,
  },
  material:{
    type:String,
  },
  pan:{
    type:String,
  },  
  gst:{
    type:String,
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

module.exports = mongoose.model('VendorManagement', schema);
