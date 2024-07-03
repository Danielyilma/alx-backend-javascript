export default function cleanSet(set, startString) {
  let result = '';

  if (!startString.length || !startString) return result;

  for (const key of set) {
    if (key.startsWith(startString)) {
      result += `${key.slice(startString.length)}-`;
    }
  }

  return result.slice(0, result.length - 1);
}
