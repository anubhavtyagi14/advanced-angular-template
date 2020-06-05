import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client';
import { from, Subject, BehaviorSubject, EMPTY, of, Observable, bindCallback, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { authConfig } from './auth.config';

@Injectable()
export class AuthService {
  constructor() {
    this.userManager = new UserManager(authConfig);
  }
  private userManager: UserManager;

  login() {
    this.userManager.signinRedirect();
  }
  isLoggedIn() {
    return from(this.userManager.getUser()).pipe(
      map((user: User) => {
        const userCurrent = !!user && !user.expired;
        return userCurrent;
      })
    );
  }
  completeLogin() {
    return from(this.userManager.signinRedirectCallback()).pipe(
      map((user: User) => {
        const userCurrent = !!user && !user.expired;
        return user;
      })
    );
  }
  logout() {
    this.userManager.signoutRedirect();
  }
  completeLogout() {
    return from(this.userManager.signoutRedirectCallback());
  }
  getAccessToken() {
    return from(this.userManager.getUser()).pipe(
      map(user => {
        if (!!user && !user.expired) {
          return user.access_token;
        }
        return null;
      })
    );
  }
  listenToAccessTokenExpiration() {
    const obs = bindCallback(this.userManager.events.addAccessTokenExpired);
    return obs().pipe(
      map(_ => true),
      catchError(error => throwError(error))
    );
  }
  loadUser() {
    return bindCallback(this.userManager.events.addUserLoaded)();
  }
}
