import actionTypes from '../actions/actionTypes';
import { buildMap } from '../service';

const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    data: {},
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_EVENTS_STARTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_EVENTS_SUCCESS:
            const filteredEvents = action.payload.events.filter(event => event.openHouse === action.payload.openHouseId);
            return {
                ...state,
                loading: false,
                loaded: true,
                data: buildMap(filteredEvents),
            };
        case actionTypes.FETCH_EVENTS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export const isLoaded = (state) => {
    if (!state) {
        throw new Error('no store');
    }

    return state.loaded;
};

export const getAllEvents = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return Object.values(state.data);
};

export const getEvent = (state, id) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return state.data[id];
};
