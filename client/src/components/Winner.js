import { fetchLocations, postLocations } from '../services/service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Winner = () => {
  const [locations, setLocations] = useState([{}]);
  //for the questions themselves
  const [goatType, setGoatType] = useState([]);
  const [winner, setWinner] = useState([]);
  const [questionType, setQuestionType] = useState([]);

  useEffect(() => {
    const goat = () =>
      fetchLocations().then((data) => {
        setLocations(data);
        // console.log(data);
      });
    goat();
    const days = () => {
      var hours = new Date().getHours();
      if (hours === 11) {
        setGoatType('Chinese restaurant');
        setQuestionType('Chinese');
      }
      if (hours === 9) {
        setGoatType('Club');
        setQuestionType('Club');
      }
    };
    days();
  }, []);
  console.log(questionType);
  useEffect(() => {
    const winning = () => {
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].question == questionType) {
          setWinner(locations[i]);
          break;
        }
      }
    };
    winning();
  });

  console.log(locations);
  console.log(winner);
  return (
    <div>
      <p>...</p>
      {/* <h1>{locations[0].title}</h1> */}
      {/* {locations.map((location) => {
        let winner;
        if (location.question == 'Club' && location.score >= winner) {
          winner = location.title;
        }
        console.log(winner);
        return <h1>{winner}</h1>;
      })} */}
      <h1>{winner.title}</h1>
      <button>
        <Link to="/maps">Go to Maps</Link>
      </button>
    </div>
  );
};

export default Winner;
