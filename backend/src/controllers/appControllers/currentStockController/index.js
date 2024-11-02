const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('CurrentStock');
  const methods = createCRUDController('CurrentStock');

  return methods;
}

module.exports = modelController();
