import { httpRequest } from '../../main/http';
import { NEWS_LIST_ACTION_TYPE } from './news-list.type';
import { NEWS_LIST_API } from './news-list.constant';
import { authSetData } from '../../lib/common/auth';
import axios from 'axios';

export function newsListBoardUploadData() {
  return async (dispatch) => {
    dispatch({ type: NEWS_LIST_ACTION_TYPE.NEWS_LIST_BOARD_UPLOAD_PENDING });

    try {
      const response = await httpRequest({
        method: NEWS_LIST_API.NEWS_LIST_BOARD_UPLOAD.METHOD,
        url: NEWS_LIST_API.NEWS_LIST_BOARD_UPLOAD.PATH,
      });

      const newsList = response.data.list;

      dispatch({
        type: NEWS_LIST_ACTION_TYPE.NEWS_LIST_BOARD_UPLOAD_SUCCESS,
        payload: newsList,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: NEWS_LIST_ACTION_TYPE.NEWS_LIST_BOARD_UPLOAD_ERROR });
    }
  };
}
