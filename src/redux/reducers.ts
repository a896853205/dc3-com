import { combineReducers } from 'redux';

import formworkReducer from '../page/formwork/reducers';
import tagnameReducer from '../page/tagname/reducers';
import tagConfigReducer from '../page/tag-config/reducers';

let reducer = combineReducers({
  formwork: formworkReducer,
  tagname: tagnameReducer,
  tagConfig: tagConfigReducer,
});

export default reducer;
