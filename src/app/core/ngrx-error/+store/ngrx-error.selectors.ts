import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NgrxErrorState, ngrxErrorFeatureKey } from './ngrx-error.state';

export const getError = createFeatureSelector<NgrxErrorState>(ngrxErrorFeatureKey);
export const getErrorMessage = createSelector(
  getError,
  (auth: NgrxErrorState) => auth.message,
);
export const getErrorCode = createSelector(
  getError,
  (auth: NgrxErrorState) => auth.code,
);


export const errorQuery = {
  getError,
  getErrorMessage,
  getErrorCode
};
