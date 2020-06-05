import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterState, NgrxRoute } from './router.state';
import { NgrxRouterActions } from './router.actions';
import {
  selectCurrentRoute, selectQueryParams, selectRouteParams, selectRouteParam, selectRouteData, selectUrl,
} from './router.selectors';


@Injectable()
export class NgrxRouterFacade {
  currentRoute$ = this.store.select(selectCurrentRoute);
  queryParams$ = this.store.select(selectQueryParams);
  routeParams$ = this.store.select(selectRouteParams);
  routeData$ = this.store.select(selectRouteData);
  url$ = this.store.select(selectUrl);
  constructor(private store: Store<RouterState>) { }

  go(route: NgrxRoute) {
    this.store.dispatch(NgrxRouterActions.go({ to: route }));
  }
  forward() {
    this.store.dispatch(NgrxRouterActions.forward());
  }

  back() {
    this.store.dispatch(NgrxRouterActions.back());
  }
}
