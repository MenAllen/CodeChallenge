/**
 * @return {number}
 */
var argumentsLength = function(...args) {
 
  let length = 0;
  
  for (let i=0; i<args.length; i++) {
      length++;
  }
 
  return length;
 };
 
 /**
  * argumentsLength(1, 2, 3); // 3
  */