import './index.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Question from './components/Question';
import Winner from './components/Winner';
import Maps from './components/Maps';
import Login from './components/Login';
import Deciding from './components/Deciding';
import LoggedinWinner from './components/LoggedinWinner';
import { gapi } from 'gapi-script';
const clientId =
  '920146011440-2som4b9al73g4gesg373a1k7fbt6mno7.apps.googleusercontent.com';
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
    console.log(clientId);
  });
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div className="card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4">
              <h2 className="mt-10 ">WELCOME BARCELONA'S</h2>
              <h1 class="text-8xl mt-10">
                <span id="goat">GOAT</span> LOCATIONS
              </h1>

              <Login></Login>

              {/* bg-green-300 px-10 py-5 rounded-lg hover:bg-orange-300 text-white font-medium text-4xl */}
              {/* <Link to="/question">
                <button className="button ml-big">Enter</button>
              </Link> */}
            </div>
          </Route>
          <Route path="/question">
            <Question></Question>
            {/* <Test></Test> */}
          </Route>
          <Route path="/winner">
            <Winner></Winner>
          </Route>
          <Route path="/deciding">
            <Deciding></Deciding>
          </Route>
          <Route path="/loggedinWinner">
            <LoggedinWinner></LoggedinWinner>
          </Route>
          <Route path="/maps">
            <Maps></Maps>
            {/* <MarkerTest></MarkerTest> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*  

*/
