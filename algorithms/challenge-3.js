function sumMix(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") res = res + parseInt(arr[i]);
    else res = res + arr[i];
  }
  return res;
}

module.exports = sumMix;
