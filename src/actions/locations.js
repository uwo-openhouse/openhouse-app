import actionTypes from './actionTypes';
import { fetchLocations } from '../service/locations';


// eslint-disable-next-line import/prefer-default-export
export const getLocations = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_BUILDINGS_STARTED,
    });

    return fetchLocations()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_BUILDINGS_ENDED,
            });
        });
};
