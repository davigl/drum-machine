export const SET_DISPLAY = 'SET_DISPLAY';

export const setDisplay = (dispatch, value) => {
  dispatch({ type: SET_DISPLAY, payload: value });
};
