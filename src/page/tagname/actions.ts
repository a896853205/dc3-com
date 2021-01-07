import { createActions } from "redux-actions";

export const actionTypes = {
  ADD_TAGNAME: "ADD_TAGNAME",
  SHOW_TAGNAME: "SHOW_TAGNAME",
  SEARCH_TAGNAME: "SEARCH_TAGNAME",
};

export const { addTagname, showTagname, searchTagname } = createActions({
  [actionTypes.ADD_TAGNAME]: (state) => state,
  [actionTypes.SHOW_TAGNAME]: (state) => state,
  [actionTypes.SEARCH_TAGNAME]: (state) => state,
});
