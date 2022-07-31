import './index.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Question from './components/Question';
import Winner from './components/Winner';
import Maps from './components/Maps';
import Test from './components/Test';
import MarkerTest from './components/MarkerTest';
function App() {
  return (
    <Router>
      <div class="   ">
        <Switch>
          <Route exact path="/">
            <div className="card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4">
              <h2 className="mt-10 ">WELCOME TO BARCELONA'S</h2>
              <h1 class="text-8xl mt-10">
                <span id="goat">GOAT</span> LOCATIONS
              </h1>

              {/* bg-green-300 px-10 py-5 rounded-lg hover:bg-orange-300 text-white font-medium text-4xl */}
              <Link to="/question">
                <button className="button mt-20 mr-20">Enter</button>
              </Link>
            </div>
          </Route>
          <Route path="/question">
            {/* <Question></Question> */}
            <Test></Test>
          </Route>
          <Route path="/winner">
            <Winner></Winner>
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
