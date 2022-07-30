import './index.css';
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
      <div class="font-mono p-6 max-w-4xl h-96 mt-9 mx-auto bg-yellow-700 rounded-xl shadow-lg flex items-center space-x-4 flex-col ">
        <Switch>
          <Route exact path="/">
            <h1 class="text-white mb-20 text-5xl">Welcome to GOAT Locations</h1>
            <button className="bg-green-300 px-10 py-5 rounded-lg hover:bg-orange-300 text-white font-medium text-4xl">
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
