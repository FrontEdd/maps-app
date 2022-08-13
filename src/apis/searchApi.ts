import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        country: 'pe',
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZXJhenVyaXMiLCJhIjoiY2wzOWs0eGN1MDRlbjNqdDVzajU5MXU0dCJ9.mdbDK727YH5Y6mGaq8-WSA'
    }
})

export default searchApi;