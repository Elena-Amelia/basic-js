const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, x = options) {
  if (typeof str !== 'string') { str = String(str); }
  if (typeof x.addition === 'boolean' || typeof x.addition === 'object' ) { x.addition = String(x.addition); }
  const options = {
    repeatTimes: x.repeatTimes || 1,
    separator: x.separator || '+',
    addition: x.addition || '',
    additionSeparator: x.additionSeparator || '|',
    additionRepeatTimes: x.additionRepeatTimes || 1,
  }
  let add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  let add1  = add.slice(0, add.length - options.additionSeparator.length);
  let result = (str + add1 + options.separator).repeat(options.repeatTimes);
  let result1 = result.slice(0, result.length - options.separator.length);
  return result1;
}

module.exports = {
  repeater
};
