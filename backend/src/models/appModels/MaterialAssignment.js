const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    assignment_number : {
        type: String,
      },
      material_name: {
        type: String,
      },
      assigned_quantity: {
          type: String,
        },
      assigned_to: {
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

module.exports = mongoose.model('MaterialAssignment', schema);
