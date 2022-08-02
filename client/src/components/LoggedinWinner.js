import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../index.css';
import '../App.css';

const LoggedinWinner = () => {
  const [goatType, setGoatType] = useState([])
  useEffect(() => {
    const days = () => {
      let day = new Date().getDay()
      console.log(day)
      var hours = new Date().getHours();
      if (day === 1) {
        setGoatType('Chinese restaurant');
      }
      if (day === 2) {
        setGoatType('Club');
      }
      if (day === 3) {
        setGoatType('Karaoke');
      }
      if (day === 4) {
        setGoatType('Pizzeria');
      }
      if (day === 5) {
        setGoatType('Supermarket');
      }
      if (day === 6) {
        setGoatType('Exhibition');
      }
      if (day === 7) {
        setGoatType('Skate Spot');
      }
    };
    days()})
  
  return (
    <div className='card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4'>
    <p>The herd has decided, Barcelona’s GOAT {goatType} is...</p>

    <Link to="/winner">
      <button className="button maps">Reveal GOAT</button>
    </Link>
  </div>
  )
}

export default LoggedinWinner