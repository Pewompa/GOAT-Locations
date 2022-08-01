export const fetchLocations = async () => {
  return fetch('http://localhost:4000/locations')
    .then((response) => response.json())
    .catch((e) => console.log(e));
};
export const fetchLocationsId = async () => {
  return fetch('http://localhost:4000/locations/googleId')
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

export const postLocations = (title, lat, lng, question, googleId) => {
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
      googleId: googleId,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const fetchId = async () => {
  return fetch('http://localhost:4000/googleId')
    .then((response) => response.json())
    .catch((e) => console.log(e));
};

export const postId = (id) => {
  return fetch('http://localhost:4000/googleId', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      googleId: id,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const removeId = (id) => {
  return fetch('http://localhost:4000/googleId/remove', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      googleId: id,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
