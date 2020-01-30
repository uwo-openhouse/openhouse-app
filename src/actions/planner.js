import actionTypes from "./actionTypes";
import {sendAddToPlanner, sendRemoveFromPlanner} from "../service/planner";

export const addToPlanner = (event) => (dispatch) => {

    //TODO create notification

    dispatch({
        type: actionTypes.ADD_EVENT_TO_PLANNER,
        payload: {
            eventID: event.uuid,
        },
    });

    return sendAddToPlanner(event.uuid);
};

export const removeFromPlanner = (event) => (dispatch) => {

    //TODO delete notification

    dispatch({
        type: actionTypes.REMOVE_EVENT_FROM_PLANNER,
        payload: event.uuid,
    });

    return sendRemoveFromPlanner(event.uuid);
};
