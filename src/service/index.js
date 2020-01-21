// noinspection ES6CheckImport
import { BACKEND_URL, DEFAULT_TIME_ZONE } from 'react-native-dotenv'
import moment from "moment";

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

export const getDefaultTimezone = () => DEFAULT_TIME_ZONE;

export const formatTime = (time) => moment(time, 'H:m').format('h:mm A');
