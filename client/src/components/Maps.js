import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

// import usePlacesAutocomplete, {
//   getGeoCode,
//   getLatLng,
// } from 'use-places-autocomplete';
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxList,
//   ComboboxPopover,
//   ComboboxOption,
// } from '@reach/combobox';
// import '@reach/combobox/styles.css';

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
const Maps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDAZNspVfSFWEByUcazI2mG6a-w9N_39qY',
    libraries,
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  //   function Search() {
  //     const {
  //       ready,
  //       value,
  //       suggestions: { status, data },
  //       setValue,
  //       clearSuggestions,
  //       // eslint-disable-next-line react-hooks/rules-of-hooks
  //     } = usePlacesAutocomplete({
  //       requestOptions: {
  //         location: {
  //           lat: () => 41.399149,
  //           lng: () => 2.1828661,
  //         },
  //         radius: 5000,
  //       },
  //     });
  //     return (
  //       <Combobox
  //         onSelect={(address) => {
  //           console.log(address);
  //         }}
  //       >
  //         <ComboboxInput
  //           value={value}
  //           onChange={(e) => {
  //             setValue(e.target.value);
  //           }}
  //           disabled={!ready}
  //           placeholder="Enter a location"
  //         ></ComboboxInput>
  //       </Combobox>
  //     );
  //   }

  return (
    <div>
      <h1>Goat Map</h1>
      {/* <Search></Search> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default Maps;
