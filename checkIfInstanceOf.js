var checkIfInstanceOf = function(obj, classFunction) {

  if (typeof classFunction !== 'function')
      return false;

  if (obj === null || obj === undefined) {
      return false;
  }

  let classObj = Object.getPrototypeOf(obj);
while ( classObj ) {
  if (classObj === classFunction.prototype) {
    return true;
  }
  classObj = Object.getPrototypeOf(classObj)
}
return false;

};

/**
* checkIfInstanceOf(new Date(), Date); // true
*/