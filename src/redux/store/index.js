import { createStore, combineReducers } from 'redux';

import drumReducer from '../reducers/drum';

const rootReducer = combineReducers({
  drum: drumReducer
});

const store = createStore(rootReducer);

export default store;
