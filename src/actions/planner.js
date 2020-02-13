import actionTypes from "./actionTypes";
import {Notifications} from 'expo';
import {sendAddToOpenHouse, sendAddToPlanner, sendRemoveFromPlanner} from "../service/planner";
import moment from 'moment-timezone';
import {getDefaultTimezone} from "../service";
import {getNotificationID, getOpenHouse, isVisitingOpenHouse} from "../reducers";
import {Platform} from "react-native";
import * as Permissions from 'expo-permissions';


if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('UWO-open-house', {
        name: 'UWO-open-house',
        priority: 'max',
        sound: true,
        vibrate: true,
    });
}
else if (Platform.OS === 'ios') {
    Permissions.askAsync(Permissions.NOTIFICATIONS);
}

export const addToPlanner = (event) => (dispatch, getState) => {
    const openHouse = getOpenHouse(getState());
    // adds the open house date and the event time to produce a time stamp
    const eventDate = moment.unix(openHouse.date).tz(getDefaultTimezone());
    const eventTime = moment.tz(event.startTime, 'H:m', getDefaultTimezone()).month(eventDate.month()).date(eventDate.date()).year(eventDate.year());
    const visitingOpenHouse = isVisitingOpenHouse(getState(), openHouse.uuid);

    dispatch({
        type: actionTypes.ADD_EVENT_TO_PLANNER_STARTED,
        payload: {
            event: event,
            notificationTime: eventTime.unix(),
            openHouse,
            isOpenHouseVisited: visitingOpenHouse,
        },
    });

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

    const requests = [sendAddToPlanner(event.uuid)];
    if (!visitingOpenHouse) {
        requests.push(sendAddToOpenHouse(openHouse.uuid));
    }
    return Promise.all(requests)
};

export const removeFromPlanner = (eventID) => (dispatch, getState) => {
    const notificationID = getNotificationID(getState(), eventID);

    dispatch({
        type: actionTypes.REMOVE_EVENT_FROM_PLANNER_STARTED,
        payload: {
            eventID,
            notificationID,
        },
    });

    const dispatchRemove = () => dispatch({
        type: actionTypes.REMOVE_EVENT_FROM_PLANNER,
        payload: eventID,
    });

    if (notificationID) {
        Notifications.cancelScheduledNotificationAsync(notificationID)
            .then(dispatchRemove).catch(() => dispatch({
            type: actionTypes.REMOVE_EVENT_FROM_PLANNER_FAILURE,
        }));
    } else {
        dispatchRemove();
    }
    return sendRemoveFromPlanner(eventID);
};
