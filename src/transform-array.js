const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!"); }
  if (arr.length === 0) { return []; }
  let arrInit = arr.slice();
  let newArr = [];
  for ( let i = 0; i < arrInit.length; i++) {
    if (arrInit[i] === '--discard-next') {
      arrInit.splice(i - 1, 2);
      continue;
    }
    else if (arrInit[i] === '--discard-prev') {
      if (i === 0) { continue; }
      else { 
        newArr.pop();
        continue;}
    }
     
    else if (arrInit[i]=== '--double-next') {
      if (i === arrInit.length-1 ) { continue; }
      newArr.push(arrInit[i + 1]);
      continue;}
    else if (arrInit[i] === '--double-prev') {
      if (i === 0 ) { continue; }
      newArr.push(arrInit[i - 1]);
      continue;}

    newArr.push(arrInit[i]);
  }
  return newArr;
  
}

module.exports = {
  transform
};
