import { ThemeType } from '../theme-picker/theme-picker.component';

export const appShellFeatureKey = 'appShell';
export interface AppShellState {
  theme: ThemeType;
  sidebarOpened: boolean;
}

export const appShellInitialState: AppShellState = {
  theme: 'light',
  sidebarOpened: false
};
