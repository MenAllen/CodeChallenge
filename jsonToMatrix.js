var jsonToMatrix = function(arr) {

  console.log(arr)
  console.log(typeof arr[0])
  
  let matrixResult = [];
  let listKeys = [];
  let listValuesKeys = [];
  let tab = [];

  if (arr === null) {
    return 'null'
  }
   if (arr === undefined) {
    return 'undefined'
  }
  
  //  type Array
  if (Array.isArray(arr[0])) {
     for (let i = 0; i< arr[0].length; i++) {
         matrixResult.push(arr[0][i])
      }
    console.log('matrixResult Array: ', matrixResult);
  }

  // type objet
  if (typeof arr[0] === 'object') {
    
    // objet = {} ?
    //if (Object.keys(arr[0]).length === 0 && arr[0].constructor === Object) {
    //  for (let i = 0; i< arr[0].length; i++) {
    //     matrixResult.push([]);
    //  }
    //  return matrixResult;
    //};

    // c'est un objet classique avec keys et values
    listValuesKeys = [];
    listKeys = [];
    for (let i = 0; i < arr.length; i++) {
      
      listKeys = Object.keys(arr[i])
      
      for (let key in listKeys) {
         tab.push(listKeys[key]);
      }
    }
    
    // Filtrer les keys pour éliminer les doublons et trier le tableau par o alphabetique
    tab = [...new Set(tab)].sort((a, b) => { 
      if (a < b) {
        return -1;
      } else {
        return 1;
      };    
    });
    listValuesKeys.push(tab);
    tab = [];
    console.log(listValuesKeys);
    
    // Renseigner la liste des keys dans resultMatrix
    matrixResult.push(listValuesKeys[0]);
  
    // Balayer arr pour construire chaque ligne
    for (let j=0; j<arr.length; j++) {
      for (let i=0; i<matrixResult[0].length; i++) {
        if (arr[j][matrixResult[0][i]])  {
          tab.push(arr[j][matrixResult[0][i]]);
        } else 
          tab.push("");
        console.log(tab)
      }
      matrixResult.push(tab)
      tab=[];
    }
    
//     console.log('MatrixResult Object: ', matrixResult);
     return matrixResult;    
   }
//    console.log('End: ', matrixResult);
    
};

//console.log(jsonToMatrix([{"b": 1, "a": 2},{"b": 3, "a": 4}]));
//console.log(jsonToMatrix([{"a": 1, "b": 2},{"c": 3, "d": 4}, {}]))
//console.log(jsonToMatrix([{}, {}, {},]))
console.log(jsonToMatrix([{"a": {"b": 1, "c": 2}},{"a": {"b": 3, "d": 4}}]))