import {
  BackgroundLayout,
  ContentLayout,
  PageLayout,
} from '../../lib/elements/layout';
import { NewsListContainer } from './news-list.container';

export function newsListPage() {
  return (
    <BackgroundLayout>
      <ContentLayout>
        <PageLayout>
          <NewsListContainer />
        </PageLayout>
      </ContentLayout>
    </BackgroundLayout>
  );
}
