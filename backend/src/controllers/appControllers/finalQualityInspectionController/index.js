const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('FinalQualityInspection');
  const methods = createCRUDController('FinalQualityInspection');

  return methods;
}

module.exports = modelController();
