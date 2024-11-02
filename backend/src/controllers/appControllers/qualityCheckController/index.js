const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('QualityCheck');
  const methods = createCRUDController('QualityCheck');

  return methods;
}

module.exports = modelController();
