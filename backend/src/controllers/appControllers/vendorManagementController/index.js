const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('VendorManagement');
  const methods = createCRUDController('VendorManagement');

  return methods;
}

module.exports = modelController();
