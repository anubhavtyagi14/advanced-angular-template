import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { withLatestFrom, exhaustMap, tap, catchError, mergeMap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { AuthActions } from './auth.actions';
import { of, EMPTY } from 'rxjs';
import { NgrxRouterActions } from '@app/core/ngrx-router';
import { User } from '../models/user';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      tap((action) =>
        this.authService.login()
      )
    );
  }, { dispatch: false });

  loginComplete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginComplete),
        mergeMap((action) =>
          this.authService.completeLogin().pipe(
            map(user => {
              const appuser: User = {
                email: user.profile.email,
                fullName: user.profile.name,
                image: user.profile.picture,
                token: user.access_token,
                userName: user.profile.preferred_username
              };
              return AuthActions.loginSucess({ user: appuser });
            }),
            catchError(error => of(AuthActions.loginFailure({ error }))))
        )
      ),
  );
  loginOrLogoutSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSucess, AuthActions.logoutSucess),
      map(action => NgrxRouterActions.go({ to: { path: ['/'], replaceUrl: true } })),
    );
  });
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(action => {
          this.authService.logout();
        }),
      ),
    { dispatch: false },
  );
  logoutComplete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logoutComplete),
        mergeMap((action) =>
          this.authService.completeLogout().pipe(
            map(user => {
              return AuthActions.logoutSucess();
            }),
            catchError(error => of(AuthActions.logoutFaliure({ error }))))
        )
      ),
  );
  accessTokenExpired$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.listenToAccessTokenExpiration),
        mergeMap((action) =>
          this.authService.listenToAccessTokenExpiration().pipe(
            map(_ => AuthActions.logoutSucess())
          )
        ),
      )
  );
  getUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.getUser),
        mergeMap((action) =>
          this.authService.loadUser().pipe(
            map(user => {
              const appuser: User = {
                email: user.profile.email,
                fullName: user.profile.name,
                image: user.profile.picture,
                token: user.access_token,
                userName: user.profile.preferred_username
              };
              return AuthActions.getUserSuccess({ user: appuser });
            }),
            catchError(error => of(AuthActions.getUserFail({ error })))
          )
        )
      )
  )
}
