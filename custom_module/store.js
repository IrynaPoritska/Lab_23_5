class Store {
    constructor(name, location) {
      this.name = name;
      this.location = location;
      this.inventory = [];
    }
  }
  
  function addStore(name, location, storeList) {
    let newStore = new Store(name, location);
    storeList.push(newStore);
    return newStore;
  }
  
  function editStore(name, location, storeList, newName, newLocation) {
    let store = findStore(name, location, storeList);
    if (store !== -1) {
      store.name = newName;
      store.location = newLocation;
      return 1;
    }
    return -1;
  }
  
  function removeStore(name, location, storeList) {
    let store = findStore(name, location, storeList);
    if (store !== -1) {
      let index = storeList.indexOf(store);
      storeList.splice(index, 1);
      return 1;
    }
    return -1;
  }
  
  function findStore(name, location, storeList) {
    for (let i = 0; i < storeList.length; i++) {
      if (storeList[i].name === name && storeList[i].location === location) {
        return storeList[i];
      }
    }
    return -1;
  }
  
  exports.addStore = addStore;
  exports.editStore = editStore;
  exports.removeStore = removeStore;
  exports.findStore = findStore;