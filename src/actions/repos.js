import { ACTION_TYPES, BASE_URL } from "../constants";
import { showLoader, hideLoader } from "./app";
import axios from "axios";
import { message } from "antd";

const { USER_REPOS_FETCHED, SEARCH_REPOS } = ACTION_TYPES;

export const fetchUserRepoSuccess = (data) => ({
  type: USER_REPOS_FETCHED,
  payload: data,
});

export const searchRepos = (value) => ({
  type: SEARCH_REPOS,
  payload: value,
});

export const fetchUserRepos = (userName) => (dispatch) => {
  dispatch(showLoader());
  axios.get(`${BASE_URL}/users/${userName}/repos`).then(
    ({ data }) => {
      dispatch(hideLoader());
      dispatch(fetchUserRepoSuccess(data));
    },
    (error) => {
      dispatch(hideLoader());
      message.error("Fetching user repos failed!");
    }
  );
};
