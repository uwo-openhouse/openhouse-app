import actionTypes from './actionTypes';
import { fetchOpenHouses } from '../service/openHouses';

// eslint-disable-next-line import/prefer-default-export
export const getOpenHouses = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_OPEN_HOUSES_STARTED,
    });

    return fetchOpenHouses()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_OPEN_HOUSES_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_OPEN_HOUSES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_OPEN_HOUSES_ENDED,
            });
        });
};
