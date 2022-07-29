import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';

import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Question = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await postLocations(newLocation);
    console.log(data);
    setLocations([...locations, data]);
    setNewLocation('');
    setIsSubmitted(!isSubmitted);
  };
  const handleChange = (event) => {
    setNewLocation(event.target.value);
  };

  return (
    <div>
      {!isSubmitted ? (
        <div>
          <p>What is the best Chinese restaurant in Barcelona?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Search Locations"
              value={newLocation}
              onChange={handleChange}
              required
            />
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      ) : (
        <div>
          <h1>THANK YOU FOR YOUR SUBMISSION!</h1>
          <p>
            The herd is deciding, the winner will be revealed tonight at 10 p.m.
          </p>
          <button>
            {/* This will have to go to maps */}

            <Link to="/winner">Accept</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLangLng,
// } from 'react-places-autocomplete';
// import { useState, useEffect } from 'react';
// import { fetchLocations, postLocations } from '../services/service';

// import { Link } from 'react-router-dom';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Question = () => {
//   const [locations, setLocations] = useState([]);
//   const [newLocation, setNewLocation] = useState('');

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let data = await postLocations(newLocation);
//     console.log(data);
//     setLocations([...locations, data]);
//     setNewLocation('');
//     setIsSubmitted(!isSubmitted);
//   };
//   const handleChange = (event) => {
//     setNewLocation(event.target.value);
//   };

//   return (
//     <div>
//       {!isSubmitted ? (
//         <div>
//           <p>What is the best Chinese restaurant in Barcelona?</p>
//           <PlacesAutocomplete
//           onSubmit=
//             value={newLocation}
//             onChange={handleChange}
//             // onSelect={handleSelect}
//           >
//             {({
//               getInputProps,
//               suggestions,
//               getSuggestionItemProps,
//               loading,
//             }) => (
//               <div>
//                 {/* <p>Name: {newLocation}</p> */}
//                 <input
//                   {...getInputProps({ placeholder: 'Type location' })}
//                 ></input>
//                 <div>
//                   {loading ? <div>...loading</div> : null}
//                   {suggestions.map((suggestion) => {
//                     const style = {
//                       backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
//                     };
//                     return (
//                       <div {...getSuggestionItemProps(suggestion, { style })}>
//                         {suggestion.description}
//                       </div>
//                     );
//                   })}
//                   {/* {suggestions.map((suggestion) => {
//                 return <div>{suggestion.description}</div>;
//               })} */}
//                 </div>
//               </div>
//             )}
//           </PlacesAutocomplete>
//           {/* <form onSubmit={handleSubmit}>
//             <input
//               type="search"
//               name="search"
//               placeholder="Search Locations"
//               value={newLocation}
//               onChange={handleChange}
//               required
//             />
//             <input type="submit" value="SUBMIT" />
//           </form> */}
//         </div>
//       ) : (
//         <div>
//           <h1>THANK YOU FOR YOUR SUBMISSION!</h1>
//           <p>
//             The herd is deciding, the winner will be revealed tonight at 10 p.m.
//           </p>
//           <button>
//             {/* This will have to go to maps */}

//             <Link to="/winner">Accept</Link>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Question;
