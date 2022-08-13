import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZXJhenVyaXMiLCJhIjoiY2wzOWs0eGN1MDRlbjNqdDVzajU5MXU0dCJ9.mdbDK727YH5Y6mGaq8-WSA'
    }
})

export default directionsApi;