/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const strFirst = s1.split('');
  const strSecond = s2.split('');
  let count = 0;
  strFirst.forEach((item) => {
    const index = strSecond.indexOf(item);
    if (strSecond.includes(item)) {
      strSecond.splice(index, 1);
      count++;
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
