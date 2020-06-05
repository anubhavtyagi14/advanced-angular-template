import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';
const getUser = createAction('[Auth] GET_USER');

const getUserSuccess = createAction('[Auth] GET_USER_SUCCESS', props<{ user: User }>());

const getUserFail = createAction('[Auth] GET_USER_FAIL', props<{ error: Error }>());
const login = createAction('[Auth] Login');
const loginComplete = createAction('[Auth] Login Complete');
const loginSucess = createAction('[Auth] Login Success', props<{ user: User }>());
const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());
const logout = createAction('[Auth] Logout');
const logoutComplete = createAction('[Auth] Logout Complete');
const logoutSucess = createAction('[Auth] Logout Success');
const logoutFaliure = createAction('[Auth] Logout Failure', props<{ error: any }>());
const listenToAccessTokenExpiration = createAction('[Auth] Access Token Expired');


export const AuthActions = {
  getUser, getUserSuccess, getUserFail, login, loginComplete,
  loginFailure, loginSucess, logout, logoutComplete, logoutSucess,
  logoutFaliure, listenToAccessTokenExpiration
};

