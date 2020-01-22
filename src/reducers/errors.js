import actionTypes from '../actions/actionTypes';
import moment from "moment";

const DEFAULT_STATE = {
    data:    [],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AREAS_FAILURE:
        case actionTypes.FETCH_BUILDINGS_FAILURE:
        case actionTypes.FETCH_OPEN_HOUSES_FAILURE:
            return {
                ...state,
                data: [...state.data, {
                    action: action.type,
                    time: moment().valueOf(),
                    error: action.payload instanceof Object ? JSON.stringify(action.payload) : action.payload,
                    isVisible: true,
                }],
            };
        case actionTypes.HIDE_ERROR:
            return {
                ...state,
                data: state.data.map((error, index) => {
                    if (index === action.payload) {
                        return {
                            ...error,
                            isVisible: false,
                        };
                    }
                    return error;
                }),
            };
        default:
            return state;
    }
};

export const getErrors = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return state.data;
};
