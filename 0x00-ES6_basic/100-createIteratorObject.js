export default function createIteratorObject(report) {
  const array = [];
  const values = Object.values(report.allEmployees);

  for (const value of values) {
    array.push(...value);
  }

  return {
    [Symbol.iterator]: () => {
      let idx = 0;
      const data = array;

      return {
        next() {
          if (idx < data.length) {
            const x = idx;
            idx += 1;
            return { value: data[x], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
