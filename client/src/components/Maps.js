import { useState, useEffect } from 'react';
import { fetchLocations, postLocations } from '../services/service';
import { Loader } from '@googlemaps/js-api-loader';
import Logout from './Logout';
import '../style/maps.css';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

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
  const [locations, setLocations] = useState([{}]);
  const [markers, setMarkers] = useState([{}]);
  const [markersClub, setMarkersClub] = useState([{}]);
  const [markersKaraoke, setMarkersKaraoke] = useState([{}]);
  const [markersPizzeria, setMarkersPizzeria] = useState([{}]);
  const [markersSupermarket, setMarkersSupermarket] = useState([{}]);
  const [markersExhibition, setMarkersExhibition] = useState([{}]);
  const [markersSkateSpot, setMarkersSkateSpot] = useState([{}]);
  const [selected, setSelected] = useState(null);
  const [goatType, setGoatType] = useState([]);

  useEffect(() => {
    const goat = () => {
      fetchLocations().then((data) => {
        let clubArr = [];
        let karaokeArr = [];
        let pizzeriaArr = [];
        let supermarketArr = [];
        let exhibitionArr = [];
        let skateSpotArr = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].question === 'Club') {
            clubArr.push(data[i]);
          } else if (data[i].question === 'Karaoke') {
            karaokeArr.push(data[i]);
            console.log('karaoke');
          } else if (data[i].question === 'Pizzeria') {
            pizzeriaArr.push(data[i]);
          } else if (data[i].question === 'Supermarket') {
            supermarketArr.push(data[i]);
          } else if (data[i].question === 'Exhibition') {
            exhibitionArr.push(data[i]);
          } else if (data[i].question === 'Skate Spot') {
            skateSpotArr.push(data[i]);
          }
        }
        console.log(pizzeriaArr);
        console.log(clubArr);
        console.log(karaokeArr);

        setMarkers([
          ...markers,
          {
            title: data[0].title,
            lat: data[0].lat,
            lng: data[0].lng,
            question: data[0].question,
          },
        ]);

        setMarkersPizzeria([
          ...markersPizzeria,
          {
            title: pizzeriaArr[0].title,
            lat: pizzeriaArr[0].lat,
            lng: pizzeriaArr[0].lng,
            question: pizzeriaArr[0].question,
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
        setMarkersKaraoke([
          ...markersKaraoke,
          {
            title: karaokeArr[0].title,
            lat: karaokeArr[0].lat,
            lng: karaokeArr[0].lng,
            question: karaokeArr[0].question,
          },
        ]);

        setMarkersSupermarket([
          ...markersSupermarket,
          {
            title: supermarketArr[0].title,
            lat: supermarketArr[0].lat,
            lng: supermarketArr[0].lng,
            question: supermarketArr[0].question,
          },
        ]);
        setMarkersExhibition([
          ...markersExhibition,
          {
            title: exhibitionArr[0].title,
            lat: exhibitionArr[0].lat,
            lng: exhibitionArr[0].lng,
            question: exhibitionArr[0].question,
          },
        ]);
        setMarkersSkateSpot([
          ...markersSkateSpot,
          {
            title: skateSpotArr[0].title,
            lat: skateSpotArr[0].lat,
            lng: skateSpotArr[0].lng,
            question: skateSpotArr[0].question,
          },
        ]);
      });
    };

    goat();
    console.log(markersClub);
    console.log(markersPizzeria);
    console.log(markersKaraoke);
  }, []);

  console.log(markersKaraoke);

  console.log(markersPizzeria);
  console.log(markersClub);
  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    version: 'weekly',
    libraries: ['places'],
  });
  loader.load();

  return (
    <div className="card border-2  max-w-7xl h-tall  mt-20 mx-auto bg-green-450 rounded shadow-lg ">
      <h1 id="goatMap">Goat Map</h1>

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
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
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
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
            />
          );
        })}
        {markersKaraoke.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
                setGoatType(marker.question);
                console.log(marker);
              }}
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
            />
          );
        })}
        {markersPizzeria.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
                setGoatType(marker.question);
                console.log(marker);
              }}
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
            />
          );
        })}
        {markersSupermarket.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
                setGoatType(marker.question);
                console.log(marker);
              }}
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
            />
          );
        })}
        {markersExhibition.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
                setGoatType(marker.question);
                console.log(marker);
              }}
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
            />
          );
        })}
        {markersSkateSpot.map((marker) => {
          return (
            <Marker
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
                setGoatType(marker.question);
                console.log(marker);
              }}
              icon={{
                url: '/ram.svg',
                scaledSize: new window.google.maps.Size(100, 100),
              }}
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
            <div className="infoWindow">
              <p id="infoGoat" className="infoWindow">
                GOAT {selected.question}:
              </p>
              <h2 id="infoGoatTitle" className="infoWindow">
                {selected.title}
              </h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>

      <div>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default Maps;
