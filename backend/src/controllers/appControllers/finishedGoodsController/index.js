const mongoose = require('mongoose');
const createCRUDController = require('@/controllers/middlewaresControllers/createCRUDController');


function modelController() {
  const Model = mongoose.model('FinishedGoods');
  const methods = createCRUDController('PurchaseOrderCreation');

  return methods;
}

module.exports = modelController();
