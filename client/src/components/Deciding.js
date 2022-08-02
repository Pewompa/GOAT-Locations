import { Link } from 'react-router-dom';
import '../index.css';
import '../App.css';
const Deciding = () => {
  return (
    <div className="card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4">
      <h1 id="thanks">THANK YOU FOR YOUR SUBMISSION!</h1>
      <p id="herd">
        The herd is now deciding, the GOAT will be revealed at 9 p.m.
      </p>

      {/* This will have to go to maps */}
      <Link to="/maps">
        <button className="button maps">Go to Maps</button>
      </Link>
      <br />
      {/* <input type="text" placeholder="Suggest a question" /> */}
    </div>
  );
};

export default Deciding;
