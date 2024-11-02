const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    request_number : {
        type: String,
      },
      material_name: {
        type: String,
      },
      quantity: {
          type: String,
        },
      required_date: {
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

module.exports = mongoose.model('RequestCreationForMaterials', schema);
