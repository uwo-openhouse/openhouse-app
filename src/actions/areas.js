import actionTypes from './actionTypes';
import { fetchAreas } from '../service/areas';


// eslint-disable-next-line import/prefer-default-export
export const getAreas = () => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_AREAS_STARTED,
    });

    return fetchAreas()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_AREAS_SUCCESS,
                payload: response,
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_AREAS_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_AREAS_ENDED,
            });
        });
};
