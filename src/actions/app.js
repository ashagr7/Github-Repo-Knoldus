import { ACTION_TYPES, BASE_URL } from "../constants";
import axios from "axios";
import { message } from "antd";

const { FETCHING, LOADED, USER_INFO_FETCHED, LOGGED_OUT } = ACTION_TYPES;

export const showLoader = () => ({
  type: FETCHING,
});

export const hideLoader = () => ({
  type: LOADED,
});

export const logOut = () => ({ type: LOGGED_OUT });

export const fetchUserSuccess = (data) => ({
  type: USER_INFO_FETCHED,
  payload: data,
});

export const fetchUserInfo = (userName) => (dispatch) => {
  dispatch(showLoader());
  return axios.get(`${BASE_URL}/users/${userName}`).then(
    (data) => {
      dispatch(hideLoader());
      dispatch(fetchUserSuccess(data));
      return data;
    },
    (error) => {
      dispatch(hideLoader());
      message.error("OOPS!! User info could not be fetched.");
      return error.response;
    }
  );
};
