import { ACTION_TYPES } from "../constants";
const { USER_REPOS_FETCHED, SEARCH_REPOS } = ACTION_TYPES;
const initialState = {
  userRepoList: {
    all: null,
    filtered: null,
  },
};
export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
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
