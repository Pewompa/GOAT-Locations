import '../style/question.css';

import Logout from './Logout';
import Timer from './Timer';
import {
  fetchLocations,
  postLocations,
  postId,
  fetchId,
  removeCollection,
} from '../services/service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxPopover,
  ComboboxOption,
} from '@reach/combobox';
import { ComboboxComponent } from '@syncfusion/ej2-react-dropdowns';
import '@reach/combobox/styles.css';

import mapsStyle from '../style/mapsStyle';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 41.399149,
  lng: 2.1828661,
};
const options = {
  styles: mapsStyle,
};

//////////////////////////////////////////////////////////////////////////////////////////
/*FUNCTION START*/
//////////////////////////////////////////////////////////////////////////////////////////

const Question = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeToShow, setTimeToShow] = useState(false);
  const [questionType, setQuestionType] = useState([]);
  const [goatType, setGoatType] = useState([]);
  const [id, setId] = useState([{}]);

  useEffect(() => {
    const days = () => {
      let day = new Date().getDay();
      console.log(day);
      var hours = new Date().getHours();
      if (day === 1) {
        setQuestionType('Chinese Restaurant');
        setGoatType('Chinese restaurant');
      }
      if (day === 2) {
        setQuestionType('Club');
        setGoatType('Club');
      }
      if (day === 4) {
        setGoatType('Karaoke');
        setQuestionType('Karaoke');
      }
      if (day === 3) {
        setGoatType('Pizzeria');
        setQuestionType('Pizzeria');
      }
      if (day === 2) {
        setGoatType('Supermarket');
        setQuestionType('Supermarket');
      }
      if (day === 6) {
        setGoatType('Exhibition');
        setQuestionType('Exhibition');
      }
      if (day === 7) {
        setGoatType('Skate Spot');
        setQuestionType('Skate Spot');
      }
    };
    days();
    //[id]will contain several id's
    fetchId().then((data) => {
      setId(data);
      console.log(data);
    });
    console.log(id);
  }, []);

  useEffect(() => {
    const minutes = () => {
      // var minutes = (new Date()).getMinutes();
      var hours = new Date().getHours;
      if (hours === 22) {
        removeCollection();
      }
    };
    minutes();
    const time = () => {
      let hours = new Date().getHours();
      if (
        // hours === 21 ||
        hours === 22 ||
        hours === 23 ||
        hours === 24 ||
        hours === 1 ||
        hours === 2 ||
        hours === 3 ||
        hours === 4 ||
        hours === 5 ||
        hours === 6 ||
        hours === 7 ||
        hours === 8
      ) {
        setTimeToShow(!timeToShow);
      }
    };
    time();
    console.log(isSubmitted);
  }, []);
  console.log(id[0].googleId);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';
  const handlesubmit = (e) => {
    e.preventDefault();
    e.reset();
  };
  function Search() {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
      requestOptions: {
        location: {
          lat: () => 41.399149,
          lng: () => 2.1828661,
        },
        radius: 5000,
      },
    });
    return (
      <div>
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();

            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);

              let data = await postLocations(
                address,
                lat,
                lng,
                questionType,
                id[0].googleId
              );
              console.log(data);
              setLocations([...locations, data]);
              console.log(address);
              setIsSubmitted(!isSubmitted);

              console.log(lat, lng);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {/* aka input */}
          <ComboboxInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            disabled={!ready}
            placeholder="Enter a location"
            className="rounded field"
          ></ComboboxInput>
          <ComboboxPopover>
            <ComboboxList>
              {status === 'OK' &&
                data.map(({ id, description }) => (
                  <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  }

  return (
    <div className="card border-2 p-6 max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded-xl shadow-lg space-x-4">
      {!isSubmitted ? (
        !timeToShow ? (
          <div>
            <div>
              <p className="bg-green">What is Barcelona's GOAT {goatType}?</p>
              <Search></Search>
            </div>

            {/* <Logout></Logout> */}
          </div>
        ) : (
          <div>
            <p>The herd has decided, Barcelona’s GOAT {goatType} is...</p>

            <Link to="/winner">
              <button className="button maps">Reveal GOAT</button>
            </Link>
          </div>
        )
      ) : (
        <div>
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
          <br />
        </div>
      )}
    </div>
  );
};
export default Question;
