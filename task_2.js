function capitalizeFirstLetter(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  
  console.log(capitalizeFirstLetter('це речення буде проаналізоване'));  .
  