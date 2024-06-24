export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, values] of array.entries()) {
    array[idx] = appendString + values;
  }

  return array;
}
