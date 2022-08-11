import { routesInit } from './router.core';

import { newsListRouter, NEWS_LIST_ROUTE_PATH } from '../../core/news-list';

export const routes = { [NEWS_LIST_ROUTE_PATH]: newsListRouter };

export const Router = routesInit(routes);
