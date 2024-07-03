export default function cleanSet(set, startString) {
  let result = [];

  if (!startString.length || !startString) return '';

  for (const key of set) {
    if (startString.length !== 0 && key.startsWith(startString)) {
      result.push(key.slice(startString.length));
    }
  }

  result = result.join('-');

  return result;
}
