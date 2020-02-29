import actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const hideErrors = () => (dispatch) => {
    dispatch({
        type: actionTypes.HIDE_ERRORS,
    });
};
