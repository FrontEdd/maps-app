/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
console.log(accessToken);

mapboxgl.accessToken = accessToken?.toString();

//Validación para verificar geolocalización
if ( !navigator.geolocation ) {
  alert( 'Tu navegador no tiene opción de Geolocation' );
  throw new Error('Tu navegador no tiene opción de Geolocation');
}


ReactDOM.render(
  <React.StrictMode>
    <MapsApp  />
  </React.StrictMode>,
  document.getElementById('root')
);
