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
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDAZNspVfSFWEByUcazI2mG6a-w9N_39qY',
    libraries,
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
