import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './auth.state';
import { authQuery } from './auth.selectors';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthFacade {
  user$ = this.store.select(authQuery.getUser);
  isLoggedIn$ = this.store.select(authQuery.getLoggedIn);
  accessToken$ = this.store.select(authQuery.getAccessToken);
  constructor(private store: Store<AuthState>) {
    // this.store.dispatch(AuthActions.listenToAccessTokenExpiration());
    this.store.dispatch(AuthActions.getUser());
  }
  login() {
    this.store.dispatch(AuthActions.login());
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
  loginComplete() {
    this.store.dispatch(AuthActions.loginComplete());
  }
  logoutComplete() {
    this.store.dispatch(AuthActions.logoutComplete());
  }
}
