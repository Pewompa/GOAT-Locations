import { fetchLocations, postLocations } from '../services/service';
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

const Test = () => {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeToShow, setTimeToShow] = useState(false);
  const [questionType, setQuestionType] = useState([]);
  const [goatType, setGoatType] = useState([]);

  useEffect(() => {
    const days = () => {
      var hours = new Date().getHours();
      if (hours === 8) {
        setQuestionType('Chinese');
        setGoatType('Chinese restaurant');
      }
      if (hours === 9) {
        setQuestionType('Club');
        setGoatType('Club');
      }
    };
    days();
  }, []);

  useEffect(() => {
    const time = () => {
      let hours = new Date().getHours();
      if (
        // hours === 20 ||
        hours === 21 ||
        hours === 22 ||
        hours === 23 ||
        hours === 24 ||
        hours === 1 ||
        hours === 2 ||
        hours === 3 ||
        hours === 4 ||
        hours === 5 ||
        hours === 6 ||
        hours === 9
      ) {
        setTimeToShow(!timeToShow);
      }
    };
    time();
  }, []);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

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
        {/* aka form */}
        <Combobox
          onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();

            try {
              const results = await getGeocode({ address });
              //do post here?
              const { lat, lng } = await getLatLng(results[0]);

              let data = await postLocations(address, lat, lng, questionType);
              console.log(data);
              setLocations([...locations, data]);
              console.log(address);
              setIsSubmitted(!isSubmitted);

              console.log(lat, lng);
              //   panTo({ lat, lng });
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
    <div>
      {!isSubmitted ? (
        !timeToShow ? (
          <div>
            <p>What is the best {goatType} in Barcelona?</p>

            <Search></Search>
          </div>
        ) : (
          <div>
            <p>The heard has decided, Barcelona’s GOAT {goatType} is...</p>
            <button>
              <Link to="/winner">Reveal GOAT</Link>
            </button>
          </div>
        )
      ) : (
        <div>
          <h1>THANK YOU FOR YOUR SUBMISSION!</h1>
          <p>
            The herd is deciding, the winner will be revealed tonight at 10 p.m.
          </p>
          <button>
            {/* This will have to go to maps */}
            <Link to="/maps">Go to Maps</Link>
          </button>
          <br />
          <input type="text" placeholder="Suggest a question" />
        </div>
      )}
    </div>
  );
};
export default Test;
