import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { NgrxErrorActions } from './ngrx-error.actions';
import { NgrxRouterActions } from '@app/core/ngrx-router';

@Injectable()
export class NgrxErrorEffects {
  error401$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgrxErrorActions.throw401Error),
      tap(_ =>
        // TODO: Replace with refresh token logic or redirect to login
        NgrxRouterActions.go({ to: { path: ['/'] } })
      ),
    )
  );
  error403$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgrxErrorActions.throw403Error),
      map(_ =>
        // TODO: Replace with show not authorized message or redirect to unauthorized Route
        NgrxRouterActions.go({ to: { path: ['/'] } })
      ),
    ),
  );

  error404$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgrxErrorActions.throw404Error),
      map(_ =>
        // TODO: Replace with 404 Route
        NgrxRouterActions.go({ to: { path: ['/'] } })
      ),
    ),
  );

  constructor(private actions$: Actions) { }
}
