import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Question from './components/Question';
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
            <Question></Question>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*  

*/
