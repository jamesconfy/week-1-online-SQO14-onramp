function countTruthy(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") continue;
    else if (arr[i] === undefined) continue;
    else if (arr[i] > 0) count += 1;
  }

  return count;
}

module.exports = countTruthy;
