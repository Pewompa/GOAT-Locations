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
      <div class=" card border-2 p-6 max-w-4xl h-96  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4  ">
        <Switch>
          <Route exact path="/">
            <h2 className="mt-10 ">WELCOME TO</h2>
            <h1 class="">
              <span id="goat">GOAT</span> LOCATIONS
            </h1>
            <button className="button mt-20 mr-20">
              {/* bg-green-300 px-10 py-5 rounded-lg hover:bg-orange-300 text-white font-medium text-4xl */}
              <Link to="/question">Enter</Link>
            </button>
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
