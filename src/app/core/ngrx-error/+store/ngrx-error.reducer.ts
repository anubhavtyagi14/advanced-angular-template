import { Action, createReducer, on } from '@ngrx/store';
import { NgrxErrorActions } from './ngrx-error.actions';
import { ngrxErrorInitialState, NgrxErrorState } from './ngrx-error.state';



const reducer = createReducer(
  ngrxErrorInitialState,
  on(NgrxErrorActions.throw401Error, (state, action) => ({ code: action.error.status, message: action.error.message })),
  on(NgrxErrorActions.throw403Error, (state, action) => ({ code: action.error.status, message: action.error.message })),
  on(NgrxErrorActions.throw404Error, (state, action) => ({ code: action.error.status, message: action.error.message })),
);

export function ngrxErrorReducer(state: NgrxErrorState | undefined, action: Action): NgrxErrorState {
  return reducer(state, action);
}
