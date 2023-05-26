const storeModule = require('./custom_module/store');
const productModule = require('./custom_module/product');
const warehouseModule = require('./custom_module/warehouse');


let storeList = [];
let warehouseList = [];

let newStore = storeModule.addStore('Apple Store', 'Львів', storeList);
console.log(`Додано новий магазин: ${newStore.name} у місті ${newStore.location}`);
console.log("--------------------------------------------------------");

let newProduct = productModule.addProduct('iPhone 14', 1500, newStore);
console.log(`Додано новий товар: ${newProduct.name} за ціною ${newProduct.price} до магазину ${newStore.name}`);
console.log("--------------------------------------------------------");
let newProduct1 = productModule.addProduct('iPhone 12', 899, newStore);
console.log(`Додано новий товар: ${newProduct1.name} за ціною ${newProduct1.price} до магазину ${newStore.name}`);
console.log("--------------------------------------------------------");
let newWarehouse = warehouseModule.addWarehouse('Склад 5A', 'Львів', warehouseList);
console.log(`Доданий новий склад: ${newWarehouse.name} у місті ${newWarehouse.location}`);

let quantity = 10;
warehouseModule.addProductToWarehouse(newProduct, quantity, newWarehouse);
console.log(`Додано ${quantity} одиниць товару ${newProduct.name} до складу ${newWarehouse.name}`);
console.log("--------------------------------------------------------");



let editProductResult = productModule.editProduct('iPhone 12', 899, newStore, 'iPhone 12', 999);
if (editProductResult === 1) {
  console.log("Результат редагування товару: Успішно");
} else {
  console.log("Результат редагування товару: Помилка");
}
console.log("--------------------------------------------------------");

let removeProductResult = productModule.removeProduct('iPhone 12', 999, newStore);
if (removeProductResult === 1) {
  console.log("Результат видалення товару: Успішно");
} else {
  console.log("Результат видалення товару: Помилка");
}
console.log("--------------------------------------------------------");

let foundProduct = productModule.findProduct('iPhone 12', 999, newStore);
if (foundProduct !== -1) {
  console.log(`Знайдений товар: ${foundProduct.name} за ціною ${foundProduct.price} в магазині ${newStore.name}`);
} else {
  console.log("Знайдений товар: Не знайдено");
}
console.log("--------------------------------------------------------");

let editStoreResult = storeModule.editStore('Apple Store', 'Львів', storeList, 'Rozetka', 'Львів');
if (editStoreResult === 1) {
  console.log("Результат редагування магазину: Успішно");
} else {
  console.log("Результат редагування магазину: Помилка");
}
console.log("--------------------------------------------------------");

let removeStoreResult = storeModule.removeStore('Rozetka', 'Львів', storeList);
if (removeStoreResult === 1) {
  console.log("Результат видалення магазину: Успішно");
} else {
  console.log("Результат видалення магазину: Помилка");
}
console.log("--------------------------------------------------------");

let foundStore = storeModule.findStore('Rozetka', 'Львів', storeList);
if (foundStore !== -1) {
  console.log(`Знайдений магазин: ${foundStore.name} у місті ${foundStore.location}`);
} else {
  console.log("Знайдений магазин: Не знайдено");
}
console.log("--------------------------------------------------------");

 let foundWarehouse = warehouseModule.findWarehouse('Склад 5A', 'Львів', warehouseList);
if (foundWarehouse !== -1) {
console.log(`Знайдений склад: ${foundWarehouse.name} у місті ${foundWarehouse.location}`);
} else {
console.log("Знайдений склад: Не знайдено");
}
console.log("--------------------------------------------------------");

let editWarehouseResult = warehouseModule.editWarehouse('Склад  4', 'Львів', warehouseList, 'Склад 5A', 'Львів');
if (editWarehouseResult === 1) {
console.log("Результат редагування складу: Успішно");
} else {
console.log("Результат редагування складу: Помилка");
}
console.log("--------------------------------------------------------");

let removeWarehouseResult = warehouseModule.removeWarehouse('Склад 4A', 'Львів', warehouseList);  
if (removeWarehouseResult === 1) {  
  console.log("Результат видалення складу: Успішно"); 
} else {  
  console.log("Результат видалення складу: Помилка");  
}
console.log("--------------------------------------------------------");


let foundProductInWarehouse = warehouseModule.findProductInWarehouse('iPhone 14', 1500, newWarehouse);
if (foundProductInWarehouse !== -1) {
console.log(`Знайдений товар: ${foundProductInWarehouse.name} за ціною ${foundProductInWarehouse.price} на складі ${newWarehouse.name}`);
} else {
console.log("Знайдений товар: Не знайдено");
}
console.log("---------------------------------------------------------");
 
let removeProductFromWarehouseResult = warehouseModule.removeProductFromWarehouse('iPhone 14', 1500, newWarehouse);
if (removeProductFromWarehouseResult === 1) {
console.log("Результат видалення товару зі складу: Успішно");
} else {
console.log("Результат видалення товару зі складу: Помилка");
}
console.log("--------------------------------------------------------");

let shipProductToStoreResult = warehouseModule.shipProductToStore('iPhone 13', 999, newWarehouse, newStore);
if (shipProductToStoreResult === 1) {
console.log("Результат відвантаження товару до магазину: Успішно");
} else {
console.log("Результат відвантаження товару до магазину: Помилка");

}
console.log("--------------------------------------------------------");
 

