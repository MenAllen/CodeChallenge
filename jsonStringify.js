var jsonStringify = function(object) {

  console.log(object)
  console.log(typeof object)

  let tabResult = [];
  let tab2 = [];
  let str1 = '\"';
  let str2 = '[';
  let str3 = ']';
  let str4 = ':';
  let str5 = '{';
  let str6 = '}';

if (object === null) {
  return 'null'
}
 if (object === undefined) {
  return 'undefined'
}

if (typeof object === 'boolean') {
  return object === true ? 'true' : 'false'
}

if (typeof object === 'string') {
  return str1.concat(object, str1);
}

if (typeof object === 'number') {
  return object;
}

//  type Array
if (Array.isArray(object)) {
   for (let i = 0; i< object.length; i++) {
       tabResult.push(jsonStringify(object[i]))
    }
    tabResult = str2.concat(tabResult, str3)
    return tabResult.toString()
 }

 // type objet
if (typeof object === 'object') {

  // objet {} ?
  if (Object.keys(object).length === 0 && object.constructor === Object) {
    return "{}"
  };
   
  for (const key in object) {
    if (typeof object[key] === 'string') {
      object[key] = str1.concat(object[key], str1);
    } else if (Array.isArray(object[key])) {
      object[key] = jsonStringify(object[key]);         
    } else if (typeof object[key] === 'object') {
      object[key] = jsonStringify(object[key]);
    }
    
    tabResult.push(str1.concat(key, str1, str4, object[key]));
  }
   
  return str5.concat(tabResult.toString(), str6)
 }


  // tout autre type

  
};

//console.log(jsonStringify(true));
//console.log(jsonStringify({"y":1,"x":2}));
//console.log(jsonStringify([{},null,"Hello"]));
//console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null}));
//console.log(jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}}));
console.log(jsonStringify(0));
