import findIndex from 'lodash/findIndex';
import { GET_HOME_PAGE_DATA_REQUEST_SUCCESS, HIDE_STORY_REQUEST_SUCCESS, UP_VOTE_REQUEST_SUCCESS } from '../actionTypes/HomeActionTypes';
import { arregateHomeData } from '../service/HomeService';

export default function HomeReducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_HOME_PAGE_DATA_REQUEST_SUCCESS: {
      const data = action.refresh ? arregateHomeData(state) : arregateHomeData(action.data);
      return {
        ...data
      };
    }

    case HIDE_STORY_REQUEST_SUCCESS: {
      let newState = { ...state };
      console.log('id: ', action.id)
      const index = findIndex(newState.hits, ['objectID', action.id]);
      console.log('index: ', index);
      newState.hits[index].hide = true;
      return {
        ...newState
      };
    }

    case UP_VOTE_REQUEST_SUCCESS: {
      let newState = { ...state };
      const index = findIndex(newState.hits, ['objectID', action.id]);
      newState.hits[index].points += 1;
      return {
        ...newState
      };
    }

    default:
      return state;
  }
}
