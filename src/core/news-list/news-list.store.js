import { NEWS_LIST_ACTION_TYPE } from './news-list.type';

import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  newsListBoard: initRequestState(),
};

export function newsListStore(state = initialState, action) {
  switch (action.type) {
    case NEWS_LIST_ACTION_TYPE.NEWS_LIST_BOARD_UPLOAD_PENDING:
      return {
        ...state,
        newsListBoard: setRequestPending(state.newsListBoard),
      };
    case NEWS_LIST_ACTION_TYPE.NEWS_LIST_BOARD_UPLOAD_SUCCESS:
      return {
        ...state,
        newsListBoard: setRequestSuccess(state.newsListBoard, action.payload),
      };
    case NEWS_LIST_ACTION_TYPE.NEWS_LIST_BOARD_UPLOAD_ERROR:
      return {
        ...state,
        newsListBoard: setRequestError(state.newsListBoard, action.message),
      };

    default:
      return state;
  }
}
