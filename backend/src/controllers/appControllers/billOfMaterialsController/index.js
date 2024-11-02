const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('BillOfMaterials');
  const methods = createCRUDController('PurchaseOrderCreation');

  return methods;
}

module.exports = modelController();
