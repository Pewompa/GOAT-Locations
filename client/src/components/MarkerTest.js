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

const MarkerTest = () => {
  // useEffect(() => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: event.latLng.lat(),
  //     },
  //   ]);
  //   // }, []);
  //   const [locations, setLocations] = useState([{}]);
  //   const [markers, setMarkers] = useState([{}]);
  //   useEffect(() => {
  //     const goat = () => {
  //       fetchLocations().then((data) => {
  //         // setMarkers(data);
  //         // console.log(data);
  //         setMarkers({ lat: data[0].lat, lng: data[0].lng });
  //         // setMarkers([data[0].lat, data[0].lng]);
  //         // console.log(data[0].lat);
  //       });
  //       // const cords = {
  //       //   lat: data[0].lat, lng: data[0].lng
  //       // }
  //     };
  //     // console.log(markers);
  //     goat();
  //   }, []);
  //   console.log(markers);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDAZNspVfSFWEByUcazI2mG6a-w9N_39qY',
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
        <Marker position={{ lat: 41.3911141, lng: 2.1789833 }} />
      </GoogleMap>
    </div>
  );
};

export default MarkerTest;
