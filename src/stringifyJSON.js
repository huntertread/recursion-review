// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

var stringifyJSON = function(obj) {
  // if typeof is function or undefined
  if (typeof obj === 'function' || typeof obj === 'undefined') {
    // return undefined or continue
    return undefined;
  }
  // if typeof index is a string
  if (typeof obj === 'string') {
    // return the string
    return obj = `"${obj}"`;
  }
  // iterate over the array or object
  if (Array.isArray(obj) === true) {
    if (obj.length === 0) {
      obj = '[]';
      return obj;
    }
    var stringCopy = '[';
    for (var i = 0; i < obj.length; i++) {
      stringCopy += stringifyJSON(obj[i]) + ',';
    }
    return stringCopy = stringCopy.slice(0, stringCopy.length - 1) + ']';
  }
  if (typeof obj === 'object') {
    if (obj === null) {
      return obj = `${obj}`;
    }
    var keyArr = Object.keys(obj);
    var valArr = Object.values(obj);
    var objCopy = '{';
    if (keyArr.length === 0) {
      obj = '{}';
      return obj;
    }
    for (var j = 0; j < valArr.length; j++) {
      if (stringifyJSON(valArr[j]) === undefined) {
        continue;
      }
      objCopy += stringifyJSON(keyArr[j]) + ':' + stringifyJSON(valArr[j]) + ',';
    }
    if (objCopy.length < 4) {
      return objCopy + '}';
    } else {
      return objCopy = objCopy.slice(0, objCopy.length - 1) + '}';
    }
  }
  return obj = '' + obj + '';
};
