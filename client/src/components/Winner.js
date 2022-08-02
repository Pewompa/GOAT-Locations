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
      let day = new Date().getDay()
      console.log(day)
      // var hours = new Date().getHours();
      if (day === 1) {
        setGoatType('Chinese restaurant');
        setQuestionType('Chinese restaurant');
      }
      if (day === 3) {
        setGoatType('Club');
        setQuestionType('Club');
      }
      if (day === 2) {
        setGoatType('Karaoke');
        setQuestionType('Karaoke');
      }
      if (day === 4) {
        setGoatType('Pizzeria');
        setQuestionType('Pizzeria');
      }
      if (day === 5) {
        setGoatType('Supermarket');
        setQuestionType('Supermarket');
      }
      if (day === 6) {
        setGoatType('Exhibition');
        setQuestionType('Exhibition');
      }
      if (day === 7) {
        setGoatType('Skate Spot');
        setQuestionType('Skate Spot');
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
