
function SortByName(sortParam) {
  return function(x, y) {
    return ((x[sortParam].toLowerCase() === y[sortParam].toLowerCase()) ? 0 : ((x[sortParam].toLowerCase() > y[sortParam].toLowerCase()) ? 1 : -1 ));
  }
}

export function alphabeticalSort (array) {
  console.log(array);
  let sortedArray = array.sort(SortByName('name'));
  return sortedArray;
}

//export default alphabeticalSort;
