export const fetchLocations = async () => {
  return fetch('http://localhost:4000/locations')
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

export const postLocations = (title) => {
  return fetch('http://localhost:4000/locations', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title: title }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};