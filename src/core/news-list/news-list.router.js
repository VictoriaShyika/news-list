import { setActivePath } from '../../lib/common/navigation';
import { NEWS_LIST_ROUTE_PATH } from '../news-list/news-list.constant';

export function newsListRouter(ctx) {
  ctx.store.dispatch(setActivePath(NEWS_LIST_ROUTE_PATH));
}
