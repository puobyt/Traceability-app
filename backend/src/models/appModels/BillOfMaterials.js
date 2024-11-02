const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    BOM_number : {
        type: String,
      },
      product_name: {
        type: String,
      },
      materials_list: {
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

module.exports = mongoose.model('BillOfMaterials', schema);
