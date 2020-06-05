import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '@env/environment';
import { AuthState, authInitialState, Status } from './auth.state';
import { AuthActions } from './auth.actions';
export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];

const reducer = createReducer(
  authInitialState,
  on(AuthActions.getUserSuccess, (state, action) => ({
    ...state,
    loggedIn: true,
    user: action.user,
  })),
  on(AuthActions.getUserFail, (state, action) => ({
    ...authInitialState,
  })),
  on(AuthActions.login, (state, _) => ({
    ...state,
    status: Status.IN_PROGRESS,
  })),
  on(AuthActions.loginSucess, (state, action) => ({
    ...state,
    isLoggedIn: true,
    user: action.user,
  })),
  on(AuthActions.loginFailure, state => ({ ...state, isLoggedIn: false })),
  on(AuthActions.logout, (state, action) => ({
    ...authInitialState,
  })),
  on(AuthActions.logoutSucess, (state, action) => ({
    ...authInitialState
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
