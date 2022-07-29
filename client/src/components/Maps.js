import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

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

const Maps = () => {
  // useEffect(() => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: event.latLng.lat(),
  //     },
  //   ]);
  // }, []);
  const [locations, setLocations] = useState([{}]);
  const [markers, setMarkers] = useState([{}]);
  useEffect(() => {
    const goat = () => {
      fetchLocations().then((data) => {
        // setMarkers(data);
        // console.log(data);
        setMarkers({ lat: data[0].lat, lng: data[0].lng });
        // setMarkers([data[0].lat, data[0].lng]);
        // console.log(data[0].lat);
      });
      // const cords = {
      //   lat: data[0].lat, lng: data[0].lng
      // }
    };
    // console.log(markers);
    goat();
  }, []);
  console.log(markers);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDAZNspVfSFWEByUcazI2mG6a-w9N_39qY',
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <div>
      <h1>Goat Map</h1>
      {/* <Search></Search> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
      >
        <Marker position={{ lat: markers.lat, lng: markers.lng }} />
      </GoogleMap>
    </div>
  );
};

export default Maps;
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from 'use-places-autocomplete';

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxList,
//   ComboboxPopover,
//   ComboboxOption,
// } from '@reach/combobox';
// import { ComboboxComponent } from '@syncfusion/ej2-react-dropdowns';
// import '@reach/combobox/styles.css';

// function Search() {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: {
//         lat: () => 41.399149,
//         lng: () => 2.1828661,
//       },
//       radius: 5000,
//     },
//   });
//   return (
//     <div>
//       {/* aka form */}
//       <Combobox
//         onSelect={async (address) => {
//           setValue(address, false);
//           clearSuggestions();

//           try {
//             const results = await getGeocode({ address });
//             //do post here?
//             console.log(address);
//             const { lat, lng } = await getLatLng(results[0]);
//             //   panTo({ lat, lng });
//           } catch (error) {
//             console.log('😱 Error: ', error);
//           }
//         }}
//       >
//         {/* aka input */}
//         <ComboboxInput
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//           disabled={!ready}
//           placeholder="Enter a location"
//         ></ComboboxInput>
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === 'OK' &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }
