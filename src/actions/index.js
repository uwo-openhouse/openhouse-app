import {getOpenHouses} from "./openHouses";
import {getOpenHouse, hasOpenHouse} from "../reducers";
import {getEvents} from "./events";
import {getLocations} from "./locations";
import {getAreas} from "./areas";
import {getEateries} from "./eateries";
import actionTypes from "./actionTypes";


export const getAll  = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.FETCH_STARTED,
    });

    Promise.all([
        getOpenHouses()(dispatch),
        getLocations()(dispatch),
        getAreas()(dispatch),
    ]).then(() => {
        const eateryPromise = getEateries()(dispatch);
        const state = getState();
        let openHouseID = null;
        if (hasOpenHouse(state)) {
            openHouseID = getOpenHouse(state).uuid;
            return Promise.all([eateryPromise, getEvents(openHouseID)(dispatch)]);
        } else {
            dispatch({
                type: actionTypes.PURGE_EVENTS,
            });
        }
        return eateryPromise;
    }).finally(() => {
        dispatch({
            type: actionTypes.FETCH_ENDED,
        });
    });
};
