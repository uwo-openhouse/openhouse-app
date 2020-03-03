import actionTypes from "../actions/actionTypes";

const DEFAULT_STATE = {
    loading: false,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STARTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_ENDED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export const isLoading = (state) => state.loading;
