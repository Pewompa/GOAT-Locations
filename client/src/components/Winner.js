import { fetchLocations, postLocations } from '../services/service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/winner.css';
import '../App.css';

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
      if (hours === 12) {
        setGoatType('Chinese restaurant');
        setQuestionType('Chinese');
      }
      if (hours === 11) {
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

    // let counter = 0;
    // for (let i = 0; i < winner.title.length; i++) {
    //   if (winner.title[i] !== ',') {
    //     counter++;
    //   } else {
    //     break;
    //   }
    // }
    // console.log(counter);
  });

  console.log(locations);
  console.log(winner.title);
  return (
    <div className="card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4">
      {/* <h1>{locations[0].title}</h1> */}
      {/* {locations.map((location) => {
        let winner;
        if (location.question == 'Club' && location.score >= winner) {
          winner = location.title;
        }
        console.log(winner);
        return <h1>{winner}</h1>;
      })} */}
      <h1 id="winner">{winner.title}</h1>
      {/* <h1 id="winner">{title()}</h1> */}

      <Link to="/maps">
        {' '}
        <button className="button winnerbutton">Go to Maps</button>
      </Link>
    </div>
  );
};

export default Winner;
