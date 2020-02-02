import actionTypes from './actionTypes';
import { fetchEateries } from '../service/Eateries';

export const getEateries = (openHouseId) => (dispatch) => {
    dispatch({
        type: actionTypes.FETCH_EATERIES_STARTED,
    });

    return fetchEateries()
        .then((response) => {
            dispatch({
                type: actionTypes.FETCH_EATERIES_SUCCESS,
                payload: {
                    Eateries: response,
                    openHouseId,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.FETCH_EATERIES_FAILURE,
                payload: error,
            });
        })
        .finally(() => {
            dispatch({
                type: actionTypes.FETCH_EATERIES_ENDED,
            });
        });
};
