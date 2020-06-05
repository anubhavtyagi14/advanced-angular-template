import * as fromRouter from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterState, routerStateFeatureKey } from './router.state';


export const selectRouter = createFeatureSelector<
  RouterState,
  fromRouter.RouterReducerState<any>
>(routerStateFeatureKey);

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  /**
   * factory function to select a query param
   * export const selectSelectedCarId = selectQueryParam('carId');
   */
  selectQueryParam,
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);
