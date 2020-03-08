module.exports = function countCats(matrix) {
  const cat = "^^"
  var matrixArray = [];

  matrix.forEach(element => {
    matrixArray = matrixArray.concat(element);
  });

  var catsCount = matrixArray.filter(f => f === cat).length

  return catsCount;
};