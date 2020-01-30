import actionTypes from "../actions/actionTypes";

const DEFAULT_STATE = {
    data: [],
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_EVENT_TO_PLANNER:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload,
                ],
            };

        case actionTypes.REMOVE_EVENT_FROM_PLANNER:
            return {
                ...state,
                data: state.data.filter(({eventID}) => eventID !== action.payload),
            };

        default:
            return state;
    }
};

export const eventIsInPlanner = (state, eventId) => {
    return state.data.map(({eventID}) => eventID).includes(eventId);
};
