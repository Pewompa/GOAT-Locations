import { fetchLocations, postLocations } from '../services/service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Winner = () => {
  const [locations, setLocations] = useState([{}]);
  useEffect(() => {
    const goat = () =>
      fetchLocations().then((data) => {
        setLocations(data);
        // console.log(data);
      });

    goat();
  }, []);

  return (
    <div>
      <p>The heard has decided, Barcelona’s GOAT Chinese restaurant is...</p>
      <h1>{locations[0].title}</h1>
      <button>
        <Link to="/maps">Go to Maps</Link>
      </button>
    </div>
  );
};

export default Winner;
