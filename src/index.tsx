/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJhenVyaXMiLCJhIjoiY2wzOWs0eGN1MDRlbjNqdDVzajU5MXU0dCJ9.mdbDK727YH5Y6mGaq8-WSA';

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
