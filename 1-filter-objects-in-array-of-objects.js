const arrayOfObjects = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", occupation: "Engineer" },
    { id: 3, country: "USA", hobby: "Reading" },
    { id: 4, name: "Charlie", age: 25, occupation: "Artist" },
    { id: 5, hobby: "Gardening", favoriteColor: "Green" },
  ];
  
  function filterByKeyValues(arr, keyToFind) {
    return arr.filter(obj => {
      for (let key in keyToFind) {
        if (obj[key] !== keyToFind[key]) {
          return false;
        }
      }
      return true;
    })
  }
  
  const keyToFind1 = { name: "Bob" };
  const result1 = filterByKeyValues(arrayOfObjects, keyToFind1);
  console.log(result1);
  // Output: [{ id: 2, name: "Bob", occupation: "Engineer" }]
  
  const keyToFind2 = { age: 25, occupation: "Artist" };
  const result2 = filterByKeyValues(arrayOfObjects, keyToFind2);
  console.log(result2);
  // Output: [{ id: 4, name: "Charlie", age: 25, occupation: "Artist" }]
  
  const keyToFind3 = { age: 30, occupation: "Artist" };
  const result3 = filterByKeyValues(arrayOfObjects, keyToFind3);
  console.log(result3);
  // Output: []
  