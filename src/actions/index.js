import axios from 'axios';
// Open weather API Key
const API_KEY = 'ab3f824bf29f38aeb9c7739ef4f5994e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//variable that holds action type so we can import it anywhere
export const FETCH_WEATHER = 'FETCH_WEATHER';

//Action to fetch API data
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

