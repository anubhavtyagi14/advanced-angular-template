import { createReducer, on, Action } from '@ngrx/store';
import { AppShellActions } from './app-shell.actions';
import { appShellInitialState, AppShellState } from './app-shell.state';

const reducer = createReducer(
  appShellInitialState,
  on(AppShellActions.toggleSidebar, state => ({ ...state, sidebarOpened: !state.sidebarOpened })),
  on(AppShellActions.openSidebar, state => ({ ...state, sidebarOpened: true })),
  on(AppShellActions.closeSidebar, state => ({ ...state, sidebarOpened: false })),
  on(AppShellActions.changeTheme, (state, action) => ({ ...state, theme: action.theme })),
);

export function appShellReducer(state: AppShellState | undefined, action: Action) {
  return reducer(state, action);
}
