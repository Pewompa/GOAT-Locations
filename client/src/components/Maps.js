import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';
import { Loader } from '@googlemaps/js-api-loader';
import '../style/maps.css';
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
  width: '100%',
  height: '100%',
};
const center = {
  lat: 41.399149,
  lng: 2.1828661,
};
const options = {
  styles: mapsStyle,
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
};
// const infoWindowOptions = {

// }
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
  const [goatType, setGoatType] = useState([]);

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
          {
            title: data[0].title,
            lat: data[0].lat,
            lng: data[0].lng,
            question: data[0].question,
          },
        ]);
        setMarkersClub([
          ...markersClub,
          {
            title: clubArr[0].title,
            lat: clubArr[0].lat,
            lng: clubArr[0].lng,
            question: clubArr[0].question,
          },
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
    <div className="card border-2  max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded shadow-lg ">
      {/* <div className="container"> */}
      <h1 id="goatMap">Goat Map</h1>
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
              //   url: './chineseIcon.png',
              //   scaledSize: new window.google.maps.Size(30, 30),
              // }}
              // icon={{
              //   path: 'M17.5 2.1875C14.3103 2.19126 11.2523 3.46005 8.99679 5.71553C6.74131 7.97101 5.47253 11.029 5.46876 14.2188C5.46494 16.8254 6.3164 19.3613 7.89251 21.4375C7.89251 21.4375 8.22064 21.8695 8.27423 21.9319L17.5 32.8125L26.7302 21.9264C26.7783 21.8684 27.1075 21.4375 27.1075 21.4375L27.1086 21.4342C28.6839 19.359 29.535 16.8242 29.5313 14.2188C29.5275 11.029 28.2587 7.97101 26.0032 5.71553C23.7478 3.46005 20.6897 2.19126 17.5 2.1875ZM17.5 18.5938C16.6347 18.5938 15.7889 18.3372 15.0694 17.8564C14.3499 17.3757 13.7892 16.6924 13.458 15.893C13.1269 15.0936 13.0403 14.2139 13.2091 13.3652C13.3779 12.5166 13.7946 11.737 14.4064 11.1252C15.0183 10.5133 15.7978 10.0966 16.6465 9.92781C17.4952 9.759 18.3748 9.84564 19.1743 10.1768C19.9737 10.5079 20.657 11.0687 21.1377 11.7881C21.6184 12.5076 21.875 13.3535 21.875 14.2188C21.8736 15.3786 21.4122 16.4906 20.592 17.3107C19.7718 18.1309 18.6599 18.5923 17.5 18.5938Z',
              //   fillColor: 'black',
              //   fillOpacity: 1,
              //   scale: 1,
              //   strokeColor: 'white',
              //   strokeWeight: 2,
              //   strokeOpacity: 0.5,
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
                setGoatType(marker.question);
                console.log(marker);
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
            options={{ maxWidth: 500, maxHeight: 100 }}
          >
            <div class="infoWindow">
              <p class="infoWindow">GOAT {selected.question}:</p>
              <h2 class="infoWindow">{selected.title}</h2>
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
