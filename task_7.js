const custom_module = require('./custom_module');
const storeModule = require('./custom_module/store');
const productModule = require('./custom_module/product');

let storeList = [];

let newStore = storeModule.addStore('Walmart', 'New York', storeList);
console.log(`Додано новий магазин: ${newStore.name} у місті ${newStore.location}`);
console.log("--------------------------------------------------------");

let newProduct = productModule.addProduct('iPhone 13', 999, newStore);
console.log(`Додано новий товар: ${newProduct.name} за ціною ${newProduct.price} до магазину ${newStore.name}`);
console.log("--------------------------------------------------------");

let editProductResult = productModule.editProduct('iPhone 13', 999, newStore, 'iPhone 12', 899);
if (editProductResult === 1) {
  console.log("Результат редагування товару: Успішно");
} else {
  console.log("Результат редагування товару: Помилка");
}
console.log("--------------------------------------------------------");

let removeProductResult = productModule.removeProduct('iPhone 12', 899, newStore);
if (removeProductResult === 1) {
  console.log("Результат видалення товару: Успішно");
} else {
  console.log("Результат видалення товару: Помилка");
}
console.log("--------------------------------------------------------");

let foundProduct = productModule.findProduct('iPhone 13', 999, newStore);
if (foundProduct !== -1) {
  console.log(`Знайдений товар: ${foundProduct.name} за ціною ${foundProduct.price} в магазині ${newStore.name}`);
} else {
  console.log("Знайдений товар: Не знайдено");
}
console.log("--------------------------------------------------------");

let editStoreResult = storeModule.editStore('Walmart', 'New York', storeList, 'Walmart', 'Los Angeles');
if (editStoreResult === 1) {
  console.log("Результат редагування магазину: Успішно");
} else {
  console.log("Результат редагування магазину: Помилка");
}
console.log("--------------------------------------------------------");

let removeStoreResult = storeModule.removeStore('Walmart', 'Los Angeles', storeList);
if (removeStoreResult === 1) {
  console.log("Результат видалення магазину: Успішно");
} else {
  console.log("Результат видалення магазину: Помилка");
}
console.log("--------------------------------------------------------");

let foundStore = storeModule.findStore('Walmart', 'Los Angeles', storeList);
if (foundStore !== -1) {
  console.log(`Знайдений магазин: ${foundStore.name} у місті ${foundStore.location}`);
} else {
  console.log("Знайдений магазин: Не знайдено");
}
console.log("--------------------------------------------------------");
