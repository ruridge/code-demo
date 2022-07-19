const apiURL = process.env.REACT_APP_VERCEL_URL ? '/api' : 'http://localhost:4002';

async function client(endpoint) {
  return fetch(apiURL + endpoint).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
