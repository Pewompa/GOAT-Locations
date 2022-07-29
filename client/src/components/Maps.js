import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';
import { Loader } from '@googlemaps/js-api-loader';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
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
  const [markersClub, setMarkersClub] = useState([{}]);
  const [selected, setSelected] = useState(null);
  console.log(selected);
  useEffect(() => {
    const goat = () => {
      fetchLocations().then((data) => {
        let clubArr = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].question === 'Club') {
            clubArr.push(data[i]);
          }
        }
        console.log(clubArr);
        setMarkers([
          ...markers,
          { title: data[0].title, lat: data[0].lat, lng: data[0].lng },
        ]);
        setMarkersClub([
          ...markersClub,
          { title: clubArr[0].title, lat: clubArr[0].lat, lng: clubArr[0].lng },
        ]);
      });
    };

    goat();
  }, []);
  console.log(markers);
  const loader = new Loader({
    apiKey: 'AIzaSyDAZNspVfSFWEByUcazI2mG6a-w9N_39qY',
    version: 'weekly',
    libraries: ['places'],
  });
  loader.load();
  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: 'AIzaSyDAZNspVfSFWEByUcazI2mG6a-w9N_39qY',
  //   // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries,
  //   // process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // });
  // if (loadError) return 'Error loading maps';
  // if (!isLoaded) return 'Loading maps';

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
        {markers.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              // icon={{
              //   // url: '/chineseIcon.png',
              //   scaledSize: new window.google.maps.Size(30, 30),
              // }}
            />
          );
        })}
        {markersClub.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
              // icon={{
              //   // url: '/chineseIcon.png',
              //   scaledSize: new window.google.maps.Size(30, 30),
              // }}
            />
          );
        })}
        {/* <Marker position={{ lat: markers.lat, lng: markers.lng }} /> */}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            //so that location info can be clicked again after being closed
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>GOAT Chinese restaurant:</p>
              <h2>{selected.title}</h2>
            </div>
          </InfoWindow>
        ) : null}
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
