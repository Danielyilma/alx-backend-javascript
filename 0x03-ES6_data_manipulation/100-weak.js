export const weakMap = new WeakMap();


export function queryAPI(endPoint) {
    const count = weakMap.get(endPoint) || 0;

    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }

    weakMap.set(endPoint, count + 1);
}