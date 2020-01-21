// eslint-disable-next-line import/prefer-default-export
import actionTypes from './actionTypes';
import { fetchEvents } from '../service/events';

// eslint-disable-next-line import/prefer-default-export
export const getEvents = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_EVENTS_STARTED,
    });

    return fetchEvents()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_EVENTS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_EVENTS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_EVENTS_ENDED,
            });
        });
};
