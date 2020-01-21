// noinspection ES6CheckImport
import { BACKEND_URL } from 'react-native-dotenv'

export const getBackEndURL = () => BACKEND_URL;


export const handleRequestError = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export const pullOutJson = response => response.json();

export const buildMap = (responseJson) => {
    const map = {};
    responseJson.forEach((element) => {
        const { uuid } = element;
        map[uuid] = element;
    });
    return map;
};

export const getDefaultTimezone = () => process.env.REACT_APP_DEFAULT_TIME_ZONE;

