import axios from 'axios';

const url = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain';

export const FETCH_RAINFALL = 'FETCH_RAINFALL';

export function fetchRainfall() {
    const request = axios.get(url);

    return {
        type: FETCH_RAINFALL,
        payload: request
    };
}
