export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const value = true;
    if (value) {
      resolve();
    } else {
      reject();
    }
  });
}
