
exports.addStore = require('./store').addStore;
exports.editStore = require('./store').editStore;
exports.removeStore = require('./store').removeStore;
exports.findStore = require('./store').findStore;

exports.addProduct = require('./product').addProduct;
exports.editProduct = require('./product').editProduct;
exports.removeProduct = require('./product').removeProduct;
exports.findProduct = require('./product').findProduct;

  
exports.addWarehouse = require('./warehouse').addWarehouse;
exports.editWarehouse = require('./warehouse').editWarehouse;
exports.removeWarehouse = require('./warehouse').removeWarehouse;
exports.findWarehouse = require('./warehouse').findWarehouse;
exports.addProductToWarehouse = require('./warehouse').addProductToWarehouse;
exports.removeProductFromWarehouse = require('./warehouse').removeProductFromWarehouse;
exports.transferProductBetweenWarehouses = require('./warehouse').transferProductBetweenWarehouses;
exports.shipProductToStore = require('./warehouse').shipProductToStore;
exports.findProductInWarehouse = require('./warehouse').findProductInWarehouse;