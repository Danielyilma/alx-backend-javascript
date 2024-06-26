export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error('Failed to fetch data from the API'))
    .finally(() => {
      console.log('Got a response from the API');
    });
}
