export default function iterateThroughObject(reportWithIterator) {
  return String(([...reportWithIterator]).join(' | '));
}
