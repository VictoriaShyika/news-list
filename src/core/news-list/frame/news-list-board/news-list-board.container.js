import { NewsListBoardComponent } from './news-list-board.component';

export function NewsListBoardContainer(props) {
  const { newsList, pageLoading, isSuccess } = props;

  return (
    <NewsListBoardComponent
      newsList={newsList}
      pageLoading={pageLoading}
      isSuccess={isSuccess}
    />
  );
}
