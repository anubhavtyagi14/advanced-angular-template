import { AppShellState, NgrxErrorState, RouterState, AuthState } from '@app/core';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '@env/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '@app/core/ngrx-router/+store/router.state';

export interface RootState {
  // readonly appShell?: AppShellState;
  // readonly ngrxError?: NgrxErrorState;
  // readonly routerState?: RouterState;
  // readonly authState?: AuthState;
}

export const reducers: ActionReducerMap<RootState> = {
  // router: routerReducer
};
export function logger(reducer: ActionReducer<any>)
  : ActionReducer<any> {
  return (state, action) => {
    // console.log('state before: ', state);
    // console.log('action', action);

    return reducer(state, action);
  }

}
export const metaReducers: MetaReducer<RootState>[] =
  !environment.production ? [logger] : [];
