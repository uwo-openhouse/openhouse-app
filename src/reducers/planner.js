import actionTypes from "../actions/actionTypes";

const DEFAULT_STATE = {
    data: {
        events: [],
        openHouses: [],
    },
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT_TO_PLANNER:
            return {
                ...state,
                data: {
                    ...state.data,
                    events: [
                        ...state.data.events,
                        action.payload.event,
                    ],
                    openHouses: state.data.openHouses.includes(action.payload.openHouse) ? state.data.openHouses : [
                        ...state.data.openHouses,
                        action.payload.openHouse,
                    ],


                },
            };

        case actionTypes.REMOVE_EVENT_FROM_PLANNER:
            return {
                ...state,
                data: {
                    ...state.data,
                    events: state.data.events.filter(({eventID}) => eventID !== action.payload),
                },
            };

        default:
            return state;
    }
};

export const eventIsInPlanner = (state, eventId) => {
    return state.data.events.map(({eventID}) => eventID).includes(eventId);
};

export const isVisitingOpenHouse = (state, openHouseId) => {
    return state.data.openHouses.includes(openHouseId);
};

export const getNotificationID = (state, eventID) => {
    return state.data.events.find(plannerEntry => plannerEntry.eventID === eventID).notificationID;
};
