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
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to GOAT Locations</h1>
            <button>
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
            {/* <Maps></Maps> */}
            <MarkerTest></MarkerTest>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*  

*/
