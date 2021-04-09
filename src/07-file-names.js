/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  names.forEach((name, index) => {
    const findIndex = result.findIndex((resultName) => name === resultName);
    if (findIndex < 0) {
      result.push(name);
    } else {
      const files = names.slice(0, index).filter((resultName) => name === resultName);
      const fileCount = files.length || 1;

      result.push(`${result[findIndex]}(${fileCount})`);
    }
  });
  return result;
}

module.exports = renameFiles;
