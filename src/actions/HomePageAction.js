import { GET_HOME_PAGE_DATA_REQUEST, HIDE_STORY_REQUEST, UP_VOTE_REQUEST } from '../actionTypes/HomeActionTypes';

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

export default {
  getHomePageData,
  hideData,
  upVoteAction
};
