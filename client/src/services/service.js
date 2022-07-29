export const fetchLocations = async () => {
  return fetch('http://localhost:4000/locations')
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

export const postLocations = (title, lat, lng, question) => {
  return fetch('http://localhost:4000/locations', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      lat: lat,
      lng: lng,
      question: question,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
