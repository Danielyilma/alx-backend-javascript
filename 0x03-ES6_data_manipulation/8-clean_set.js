export default function cleanSet(set, startString) {
  let result = [];

  for (const key of set) {
    if (startString.length !== 0 && key.startsWith(startString)) {
      result.push(key.slice(startString.length));
    }
  }

  result = result.join('-');

  return result;
}
