import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';

import { Link } from 'react-router-dom';

const Questiona = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await postLocations(newLocation);
    console.log(data);
    setLocations([...locations, data]);
    setNewLocation('');
    setIsSubmitted(!isSubmitted);
  };
  const handleChange = (event) => {
    setNewLocation(event.target.value);
  };

  return (
    <div>
      {!isSubmitted ? (
        <div>
          <p>What is the best Chinese restaurant in Barcelona?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Search Locations"
              value={newLocation}
              onChange={handleChange}
              required
            />
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      ) : (
        <div>
          <h1>THANK YOU FOR YOUR SUBMISSION!</h1>
          <p>
            The herd is deciding, the winner will be revealed tonight at 10 p.m.
          </p>
          <button>
            <Link to="/winner">Accept</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Questiona;
