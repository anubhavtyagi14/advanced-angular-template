import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './auth.state';
import { User } from '../models/user';

export const getAuth = createFeatureSelector<AuthState>(authFeatureKey);
export const getLoggedIn = createSelector(
  getAuth,
  (auth: AuthState) => auth.isLoggedIn,
);
export const getUser = createSelector(
  getAuth,
  (auth: AuthState) => auth.user,
);
export const getAccessToken = createSelector(
  getUser,
  (user: User) => user.token
);

export const authQuery = {
  getAuth,
  getLoggedIn,
  getUser,
  getAccessToken
};
