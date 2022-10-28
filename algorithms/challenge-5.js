function filterList(arr) {
  const filteredList = arr.filter((element) => typeof element === "number");

  return filteredList;
}

module.exports = filterList;
