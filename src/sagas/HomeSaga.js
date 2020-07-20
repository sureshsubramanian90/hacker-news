import { put, call, takeLatest } from 'redux-saga/effects';
import { getData } from '../interfaces/Home/HomeApi';
import {
  GET_HOME_PAGE_DATA_REQUEST,
  GET_HOME_PAGE_DATA_REQUEST_ERROR,
  GET_HOME_PAGE_DATA_REQUEST_SUCCESS,
  HIDE_STORY_REQUEST,
  HIDE_STORY_REQUEST_ERROR,
  HIDE_STORY_REQUEST_SUCCESS,
  UP_VOTE_REQUEST,
  UP_VOTE_REQUEST_ERROR,
  UP_VOTE_REQUEST_SUCCESS
} from '../actionTypes/HomeActionTypes';

function* homeSaga(action) {
  try {
    console.log('API TRIGGERED');
    const params = action.payload;
    const result = yield call(getData, params);
    if (result.isSuccess) {
      console.log('API RESULT')
      const data = result.data;
      yield put({ type: GET_HOME_PAGE_DATA_REQUEST_SUCCESS, data });
    } else {
      yield put({ type: GET_HOME_PAGE_DATA_REQUEST_ERROR });
    }
  } catch (err) {
    yield put({ type: GET_HOME_PAGE_DATA_REQUEST_ERROR });
  }
}


function* hideStorySaga(action) {
  try {
    const params = action.payload;
  } catch(err) {
    yield put({ type: HIDE_STORY_REQUEST_ERROR });
  }
}

function* upVoteSaga(action) {
  try {
    const params = action.payload;
  } catch(err) {
    yield put({ type: UP_VOTE_REQUEST_ERROR });
  }
}

export default function* watchHomeRequest() {
  yield takeLatest(GET_HOME_PAGE_DATA_REQUEST, homeSaga);
  yield takeLatest(HIDE_STORY_REQUEST, hideStorySaga);
  yield takeLatest(UP_VOTE_REQUEST, upVoteSaga);
}
