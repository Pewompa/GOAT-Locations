import { Link } from 'react-router-dom';

const Deciding = () => {
  return (
    <div>
      <h1 id="thanks">THANK YOU FOR YOUR SUBMISSION!</h1>
      <p id="herd">
        The herd is now deciding, the GOAT will be revealed at 10 p.m.
      </p>

      {/* This will have to go to maps */}
      <Link to="/maps">
        <button className="button maps">Go to Maps</button>
      </Link>
      <br />
      <input type="text" placeholder="Suggest a question" />
    </div>
  );
};

export default Deciding;
