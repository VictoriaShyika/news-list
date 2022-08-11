import { useEffect } from 'react';
import { NewsListBoardContainer } from './frame/news-list-board';

export function NewsListComponent(props) {
  const { newsList, pageLoading, isSuccess } = props;

  return (
    <NewsListBoardContainer
      newsList={newsList}
      pageLoading={pageLoading}
      isSuccess={isSuccess}
    />
  );
}
