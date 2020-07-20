import { GET_HOME_PAGE_DATA_REQUEST, HIDE_STORY_REQUEST, UP_VOTE_REQUEST, GET_HOME_PAGE_DATA_REQUEST_SUCCESS } from '../actionTypes/HomeActionTypes';

export const getHomePageData = (payload) => ({
  type: GET_HOME_PAGE_DATA_REQUEST,
  payload,
});

export const hideDataAction = (payload) => ({
  type: HIDE_STORY_REQUEST,
  payload,
});

export const upVoteAction = (payload) => ({
  type: UP_VOTE_REQUEST,
  payload,
});

export const clientRefreshAction = () => ({
  type: GET_HOME_PAGE_DATA_REQUEST_SUCCESS,
  refresh: true,
});

export default {
  getHomePageData,
  hideDataAction,
  upVoteAction,
  clientRefreshAction
};
