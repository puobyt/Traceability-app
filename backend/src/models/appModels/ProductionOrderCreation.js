const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  process_order : {
    type: String,
  },
  plant : {
    type: String,
  },
    material_code : {
        type: String,
      },
      product_description: {
        type: String,
      },
      storage_location:{
        type: String,
      },
      batch:{
        type: String,
      },
      required_quantity: {
          type: String,
        },
        instructions: {
          type: String,
        },
      start_date: {  
        type: Date,
      },
      end_date: {
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

module.exports = mongoose.model('ProductionOrderCreation', schema);
