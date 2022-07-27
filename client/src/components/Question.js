import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';

// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Question = () => {
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
            The heard is deciding, the winner will be revealed tonight at 10
            p.m.
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;

// Here we are gonna wanna post on the db about a place
