import { ACTION_TYPES } from "../constants";
const { FETCHING, LOADED, USER_INFO_FETCHED, LOGGED_OUT } = ACTION_TYPES;
const initialState = {
  is_fetching: false,
  userInfo: null,
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, is_fetching: true };
    case LOADED:
      return { ...state, is_fetching: false };
    case USER_INFO_FETCHED:
      return { ...state, userInfo: action.payload.data };
    case LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};
