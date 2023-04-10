function removeDuplicates(array) {
    let uniqueArr = [];
    
    for (let i = 0; i < array.length; i++) {
    if (!uniqueArr.includes(array[i])) {
    uniqueArr.push(array[i]);
    }
    }
    
    return uniqueArr;
    }
    
    // Приклад використання
    const duplicates = ['hello', 'world', 'hello', 'javascript', 'world'];
    const unique = removeDuplicates(duplicates);
    console.log(unique);  