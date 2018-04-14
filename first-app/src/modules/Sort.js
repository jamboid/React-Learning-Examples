
function SortByName(x,y) {
  return ((x.name === y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
}

export function alphabeticalSort (array) {
  console.log(array);
  let sortedArray = array.sort(SortByName);
  return sortedArray;
}

export default alphabeticalSort;
