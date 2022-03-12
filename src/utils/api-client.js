const apiURL = 'http://localhost:4002';

async function client(endpoint) {
  return window.fetch(apiURL + endpoint).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
