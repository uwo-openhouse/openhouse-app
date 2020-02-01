import actionTypes from "./actionTypes";
import {Notifications} from 'expo';
import {sendAddToPlanner, sendRemoveFromPlanner} from "../service/planner";
import moment from 'moment-timezone';
import {getDefaultTimezone} from "../service";
import {getNotificationID, getOpenHouse, isVisitingOpenHouse} from "../reducers";

Notifications.createChannelAndroidAsync('UWO-open-house', {
    name: 'UWO-open-house',
    priority: 'max',
    sound: true,
    vibrate: true,
});

export const addToPlanner = (event) => (dispatch, getState) => {
    const openHouse = getOpenHouse(getState());
    // adds the open house date and the event time to produce a time stamp
    const eventDate = moment.unix(openHouse.date).tz(getDefaultTimezone());
    const eventTime = moment.tz(event.startTime, 'H:m', getDefaultTimezone()).day(eventDate.day()).month(eventDate.month()).year(eventDate.year());

    const visitingOpenHouse = isVisitingOpenHouse(getState(), openHouse.uuid);

    const dispatchAdd = notificationID => dispatch({
        type: actionTypes.ADD_EVENT_TO_PLANNER,
        payload: {
            event: {
                eventID: event.uuid,
                notificationID: notificationID,
            },
            openHouse: openHouse.uuid,

        },
    });

    if (moment().isAfter(eventTime)) {
        // no notification
        dispatchAdd(null);
    } else {
        Notifications.scheduleLocalNotificationAsync({
            title: "Your next event is starting",
            body: `${event.name} is starting now!`,
            android: {
                channelId: "UWO-open-house",
            },
            ios: {
                sound: true,
            }
        }, {
            time: eventTime.toDate(),
        })
            .then(dispatchAdd)
            .catch(() => dispatch({
                type: actionTypes.ADD_EVENT_TO_PLANNER_FAILURE,
            }));
    }


    // TODO send openhouse attendance
    return sendAddToPlanner(event.uuid);
};

export const removeFromPlanner = (eventID) => (dispatch, getState) => {
    const notificationID = getNotificationID(getState(), eventID);
    if (notificationID) {
        Notifications.cancelScheduledNotificationAsync(notificationID)
            .then(() => dispatch({
                type: actionTypes.REMOVE_EVENT_FROM_PLANNER,
                payload: eventID,
            })).catch(() => dispatch({
            type: actionTypes.REMOVE_EVENT_FROM_PLANNER_FAILURE,
        }));
    } else {
        dispatch({
            type: actionTypes.REMOVE_EVENT_FROM_PLANNER,
            payload: eventID,
        });
    }
    return sendRemoveFromPlanner(eventID);
};
