import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { newsListBoardUploadData } from './news-list.action';
import { NewsListComponent } from './news-list.component';
import { NEWS_LIST_STORE_NAME } from './news-list.constant';
import {
  NAVIGATION_ACTION_TYPE,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
  getRequestData,
} from '../../main/store/store.service';

export function NewsListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[NEWS_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  useEffect(() => {
    dispatch(newsListBoardUploadData());
  }, []);

  return (
      <NewsListComponent
        newsList={getRequestData(state.newsListBoard)}
        pageLoading={pageLoading}
        isSuccess={isRequestSuccess(state.newsListBoard)}
      />
  );
}
