const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('ProductionOrderCreation');
  const methods = createCRUDController('ProductionOrderCreation');

  return methods;
}

module.exports = modelController();
