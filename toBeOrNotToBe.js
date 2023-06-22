/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

  function toBe(value) {
      if ( value === val) {return true}
      throw ("Not Equal")
  }

  function notToBe(value) {
      if ( value !== val) {return true}
      throw("Equal")
  }
  return {toBe, notToBe};

};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/