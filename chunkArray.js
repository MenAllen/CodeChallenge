/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    
  console.log(arr.length)
  let result = [];
  let tab = [];

  if (!(Array.isArray(arr) && size > 0 && size <= arr.length+1) || (arr.length === 0)) {
      return result;
  }

  for (let i=0; i<arr.length; i++) {

      if(tab.length < size) {
          tab.push(arr[i])
      } else {
          result.push(tab);
          tab = [];
          tab.push(arr[i])
      }
  }
  result.push(tab);
  return result;

};