export default function hasValuesFromArray(set, array) {
  return (new Set(array)).isSubsetOf(set);
}
