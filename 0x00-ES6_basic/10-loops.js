export default function appendToEachArrayValue(array, appendString) {
  const array2 = array;
  for (const [idx, value] of array.entries()) {
    array2[idx] = appendString + value;
  }

  return array2;
}