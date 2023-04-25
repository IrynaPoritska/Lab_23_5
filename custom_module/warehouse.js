class Warehouse {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.inventory = [];
    }
  }
  
  function addWarehouse(name, location, warehouseList) {
    let newWarehouse = new Warehouse(name, location);
    warehouseList.push(newWarehouse);
    return newWarehouse;
  }
  
  function editWarehouse(name, location, warehouseList, newName, newLocation) {
    let warehouse = findWarehouse(name, location, warehouseList);
    if (warehouse !== -1) {
      warehouse.name = newName;
      warehouse.location = newLocation;
      return 1;
    }
    return -1;
  }
  
  function removeWarehouse(name, location, warehouseList) {
    let warehouse = findWarehouse(name, location, warehouseList);
    if (warehouse !== -1) {
      let index =
  warehouseList.indexOf(warehouse);
  warehouseList.splice(index, 1);
  return 1;
  }
  return -1;
  }
  
  function findWarehouse(name, location, warehouseList) {
  for (let i = 0; i < warehouseList.length; i++) {
  if (warehouseList[i].name === name && warehouseList[i].location === location) {
  return warehouseList[i];
  }
  }
  return -1;
  }
  
  function addProductToWarehouse(product, quantity, warehouse) {
    for (let i = 0; i < quantity; i++) {
      warehouse.inventory.push(product);
    }
  }
  
  function removeProductFromWarehouse(name, price, warehouse) {
  let product = findProductInWarehouse(name, price, warehouse);
  if (product !== -1) {
  let index = warehouse.inventory.indexOf(product);
  warehouse.inventory.splice(index, 1);
  return 1;
  }
  return -1;
  }
  
  function transferProductBetweenWarehouses(name, price, sourceWarehouse, destinationWarehouse) {
  let product = findProductInWarehouse(name, price, sourceWarehouse);
  if (product !== -1) {
  removeProductFromWarehouse(name, price, sourceWarehouse);
  addProductToWarehouse(name, price, destinationWarehouse);
  return 1;
  }
  return -1;
  }
  
  function shipProductToStore(name, price, warehouse, store) {
  let product = findProductInWarehouse(name, price, warehouse);
  if (product !== -1) {
  removeProductFromWarehouse(name, price, warehouse);
  addProduct(name, price, store);
  return 1;
  }
  return -1;
  }
  
  function findProductInWarehouse(name, price, warehouse) {
  for (let i = 0; i < warehouse.inventory.length; i++) {
  if (warehouse.inventory[i].name === name && warehouse.inventory[i].price === price) {
  return warehouse.inventory[i];
  }
  }
  return -1;
  }
  
  exports.addWarehouse = addWarehouse;
  exports.editWarehouse = editWarehouse;
  exports.removeWarehouse = removeWarehouse;
  exports.findWarehouse = findWarehouse;
  exports.addProductToWarehouse = addProductToWarehouse;
  exports.removeProductFromWarehouse = removeProductFromWarehouse;
  exports.transferProductBetweenWarehouses = transferProductBetweenWarehouses;
  exports.shipProductToStore = shipProductToStore;
  exports.findProductInWarehouse = findProductInWarehouse;