const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false; }
  let result = [];
  let arr = members.filter(item => 
    typeof(item) === 'string'); //отбрасываем элем кот. не строка
  let arr1 = arr.map(item => item.trim().toUpperCase()); //убираем пробелы и приводим к загл буквам
  arr1.sort(); //сортируем по алфавиту
  arr1.forEach(item => {
    let letter = item.slice(0, 1); //оставляем первый символ
    result.push(letter);
  })
  return result.join('');
}

module.exports = {
  createDreamTeam
};
