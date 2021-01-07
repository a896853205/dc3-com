import { combineReducers } from 'redux';

import formworkReducer from '../page/formwork/reducers';

let reducer = combineReducers({
  formwork: formworkReducer,
});

export default reducer;
