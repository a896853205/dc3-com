import { combineReducers } from "redux";

import formworkReducer from "../page/formwork/reducers";
import tagnameReducer from "../page/tagname/reducers";
import tagConfigReducer from "../page/tag-config/reducers";
import deviceReducer from "../page/device/reducers";
import driverConfigReducer from "../page/driver-configuration/reducers";

let reducer = combineReducers({
  formwork: formworkReducer,
  tagname: tagnameReducer,
  tagConfig: tagConfigReducer,
  device: deviceReducer,
  driverConfig: driverConfigReducer,
});

export default reducer;
