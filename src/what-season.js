const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) { return 'Unable to determine the time of year!'; }
  if ( isNaN(Date.parse(date))) { throw new Error('Invalid date!');}
  try {
      date.getUTCMonth();
  }
  catch(err) {
       throw new Error("Invalid date!");
  }

  let x = date.getUTCMonth();
  
  if (x === 11 || x === 0 || x === 1) {
    return season = 'winter';
  } else if (x === 2 || x === 3 || x === 4) {
    return season = 'spring';
  } else if (x === 5 || x === 6 || x === 7) {
    return season = 'summer';
  } else if (x === 8 || x === 9 || x === 10) {
    return season = 'autumn';
  }

  if (!date.hasOwnProperty('getUTCTime')) { throw new Error('Invalid date!');}

} 

module.exports = {
  getSeason
};
