var jsonToMatrix = function(arr) {
  
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
    return matrixResult;
  }

  // type objet
  if (typeof arr[0] === 'object') {
    
    // objet = {} ?
    if (Object.keys(arr[0]).length === 0 && arr[0].constructor === Object) {
      for (let i = 0; i< arr[0].length; i++) {
         matrixResult.push([]);
      }
      return matrixResult;
    };

    // c'est un objet classique avec keys et values
    listValuesKeys = [];
    listKeys = [];
    for (let i = 0; i < arr.length; i++) {
      
      listKeys = Object.keys(arr[i])
      
      for (let key in listKeys) {
         tab.push(listKeys[key]);
      }
    }
    
    // Filtrer les keys pour éliminer les doublons
    tab = [...new Set(tab)];
    listValuesKeys.push(tab);
    tab = [];
    
    // Renseigner la liste des keys dans resultMatrix
    matrixResult.push(listValuesKeys[0]);
  
    // Balayer arr pour construire chaque ligne
    for (let j=0; j<arr.length; j++) {
      for (let i=0; i<matrixResult[0].length; i++) {
        if (arr[j][matrixResult[0][i]]) {
          tab.push(arr[j][matrixResult[0][i]]);
        }
      }  
      matrixResult.push(tab)
      tab=[];
    }
    
//     console.log('MatrixResult Object: ', matrixResult);
     return matrixResult;    
   }  
};