import actionTypes from '../actions/actionTypes';
import moment from "moment";

const DEFAULT_STATE = {
    data: [],
};

export default (state = DEFAULT_STATE, action) => {
    const addError = (message) => ({
        ...state,
        data: [
            ...state.data,
            {
                action: action.type,
                time: moment().valueOf(),
                message,
                error: action.payload instanceof Object ? JSON.stringify(action.payload) : action.payload,
                isVisible: true,
            }],
    });
    switch (action.type) {
        case actionTypes.FETCH_AREAS_FAILURE:
        case actionTypes.FETCH_BUILDINGS_FAILURE:
        case actionTypes.FETCH_OPEN_HOUSES_FAILURE:
            return addError("Unable to connect. Make sure you are connected to the internet.");
        case actionTypes.REMOVE_EVENT_FROM_PLANNER_FAILURE:
            return addError("Unable to remove from planner.");
        case actionTypes.ADD_EVENT_TO_PLANNER_FAILURE:
            return addError("Unable to add to planner.");
        case actionTypes.HIDE_ERRORS:
            return {
                ...state,
                data: state.data.map((error) => ({
                    ...error,
                    isVisible: false,
                })),
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

export const hasErrors = (state) => {
    if (!state) {
        throw new Error('no store');
    }
    if (state.data === null) {
        throw new Error('no store');
    }

    return state.data.map(error => error.isVisible).includes(true);
};
