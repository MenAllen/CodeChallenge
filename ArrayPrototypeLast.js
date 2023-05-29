Array.prototype.last = function() {
  let val = -1;

  if (this.length === 0)
      return val;     
  
  return this.pop()
};
