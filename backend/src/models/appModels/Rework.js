const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    batch_number : {
        type: String,
      },
    material_name: {
        type: String,
      },
    inspection_date: {
          type: Date,
        },
    inspector_name: {
        type: String,
      },
    issue_description: {
        type: String,
      },
    proposed_rework_action: {
        type: String,
      },
    rework_start_date: {
        type: Date,
      },
    rework_completion_date: {
        type: Date,
      },
    quantity_for_rework: {
        type: String,
      },
    rework_status: {
        type: String,
      },
    comments: {
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

module.exports = mongoose.model('Rework', schema);
