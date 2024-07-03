export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.has(endPoint)) {
    if (weakMap.get(endPoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  } else {
    weakMap.set(endPoint, 1);
  }
}
