const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('RequestCreationForMaterials');
  const methods = createCRUDController('RequestCreationForMaterials');

  return methods;
}

module.exports = modelController();
