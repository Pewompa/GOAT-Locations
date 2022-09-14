import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';
import Timer from './Timer';

const Deciding = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4">
      <h1 id="thanks">THANK YOU FOR YOUR SUBMISSION!</h1>
      <p id="herd">
        The herd is now deciding, the GOAT will be revealed at 9 p.m.
      </p>
      <br />

      <form onSubmit={handlesubmit}>
        <label for="suggestion" className="label">
          Suggest a GOAT type
        </label>
        <br />
        <input
          type="text"
          id="suggestion"
          name="suggestion"
          placeholder="Insert GOAT"
          className="rounded inputtext"
        />
        <input type="reset" value="Send" className="suggest" />
      </form>
      <Link to="/maps">
        <button className="button maps">Go to Maps</button>
      </Link>
    </div>
  );
};

export default Deciding;
