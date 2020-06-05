import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppShellState, appShellFeatureKey } from './app-shell.state';

const getAppShell = createFeatureSelector<AppShellState>(appShellFeatureKey);
export const getSidebarOpened = createSelector(
  getAppShell,
  (state: AppShellState) => state.sidebarOpened,
);
export const getTheme = createSelector(
  getAppShell,
  (state: AppShellState) => state.theme,
);
export const getIsDarkTheme = createSelector(
  getAppShell,
  (state: AppShellState) => state.theme === 'dark',
);
export const appShellQuery = {
  getSidebarOpened,
  getTheme,
  getIsDarkTheme
};
