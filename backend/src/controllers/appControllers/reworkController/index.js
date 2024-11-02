const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('Rework');
  const methods = createCRUDController('Rework');

  return methods;
}

module.exports = modelController();
