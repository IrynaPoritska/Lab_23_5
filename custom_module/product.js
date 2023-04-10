class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  function addProduct(name, price, store) {
    let newProduct = new Product(name, price);
    store.inventory.push(newProduct);
    return newProduct;
  }
  
  function editProduct(name, price, store, newName, newPrice) {
    let product = findProduct(name, price, store);
    if (product !== -1) {
      product.name = newName;
      product.price = newPrice;
      return 1;
    }
    return -1;
  }
  
  function removeProduct(name, price, store) {
    let product = findProduct(name, price, store);
    if (product !== -1) {
      let index = store.inventory.indexOf(product);
      store.inventory.splice(index, 1);
      return 1;
    }
    return -1;
  }
  
  function findProduct(name, price, store) {
    for (let i = 0; i < store.inventory.length; i++) {
      if (store.inventory[i].name === name && store.inventory[i].price === price) {
        return store.inventory[i];
      }
    }
    return -1;
  }
  
  exports.addProduct = addProduct;
  exports.editProduct = editProduct;
  exports.removeProduct = removeProduct;
  exports.findProduct = findProduct;
  