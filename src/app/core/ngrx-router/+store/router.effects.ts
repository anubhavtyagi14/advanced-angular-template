import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { NgrxRouterActions } from './router.actions';

@Injectable()
export class RouterEffects {
  navigate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(NgrxRouterActions.go),
        map(action => action.to),
        tap(({ path, query: queryParams, extras, replaceUrl }) => this.router.navigate(path, { queryParams, ...extras, replaceUrl })),
      ),
    { dispatch: false },
  );

  navigateBack$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(NgrxRouterActions.back),
        tap(() => this.location.back()),
      ),
    { dispatch: false },
  );

  navigateForward$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(NgrxRouterActions.forward),
        tap(() => this.location.forward()),
      ),
    { dispatch: false },
  );

  constructor(private action$: Actions, private router: Router, private location: Location) { }
}
