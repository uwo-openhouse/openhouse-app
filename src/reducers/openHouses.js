import actionTypes from '../actions/actionTypes';

const getFirstVisible = (openHouses) => {
    if (openHouses.length === 0){
        return null;
    }
    return openHouses.filter(openHouse => openHouse.visible).sort((a,b) => a.date - b.date)[0];
};

const DEFAULT_STATE = {
    loading: false,
    loaded: false,
    data: null,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_OPEN_HOUSES_STARTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_OPEN_HOUSES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: getFirstVisible(action.payload)
            };
        case actionTypes.FETCH_OPEN_HOUSES_FAILURE:
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

export const hasOpenHouse = (state) => {
    if (!state) {
        throw new Error('no store');
    }

    return state.data !== undefined;
};

export const getOpenHouse = (state) => {
    if (!state) {
        throw new Error('no store');
    }

    return state.data;
};
