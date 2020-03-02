import {
  SET_DISPLAY
} from '../actions/drum';

const INITIAL_VALUE = {
  display: ''
};

const drumReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case SET_DISPLAY:
      return { ...state, display: action.payload };
    default:
      return state;
  }
};

export default drumReducer;
