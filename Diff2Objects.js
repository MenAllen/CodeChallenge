function objDiff(obj1, obj2) {

  function objectTrue(obj) {
  return (typeof obj === 'object' && obj !== null)
}
if (!objectTrue(obj1) && !objectTrue(obj2)) {
  return obj1 === obj2 ? {} : [obj1, obj2]
}
if (!objectTrue(obj1) || !objectTrue(obj2)) {
  return [obj1, obj2]
}
if (Array.isArray(obj1) !== Array.isArray(obj2)) {
   return [obj1, obj2]
}

let delta = {};
for (const key in (obj1)) {
  if (obj2.hasOwnProperty(key)) {
    const result = objDiff(obj1[key], obj2[key])
      if (Object.keys(result).length > 0)
        delta[key] = result;
  }
}

return delta;
};

console.log(objDiff({"a": 1,"v": 3,"x": [], "z": {"a": null}}, {"a": 2,"v": 4,"x": [],  "z": {
  "a": 2 }}));