import { ACTION_TYPES } from "../constants";
const {
  FETCHING,
  LOADED,
  USER_INFO_FETCHED,
  USER_REPOS_FETCHED,
  SEARCH_REPOS,
} = ACTION_TYPES;
const initialState = {
  is_fetching: false,
  loginUser: null,
  userInfo: null,
  userRepoList: {
    all: null,
    filtered: null,
  },
};
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, is_fetching: true };
    case LOADED:
      return { ...state, is_fetching: false };
    case USER_INFO_FETCHED:
      return { ...state, userInfo: action.payload.data };
    case USER_REPOS_FETCHED:
      return {
        ...state,
        userRepoList: { all: action.payload, filtered: action.payload },
      };
    case SEARCH_REPOS:
      return {
        ...state,
        userRepoList: {
          ...state.userRepoList,
          filtered: state.userRepoList.all.filter((repo) =>
            repo.name.toLowerCase().includes(action.payload)
          ),
        },
      };

    default:
      return state;
  }
};
