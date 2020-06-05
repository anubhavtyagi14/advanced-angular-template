import { createAction, props } from '@ngrx/store';
import { ThemeType } from '../theme-picker/theme-picker.component';
const toggleSidebar = createAction('[APP] TOGGLE SIDEBAR');
const openSidebar = createAction('[APP] OPEN SIDEBAR');
const closeSidebar = createAction('[APP] CLOSE SIDEBAR');
const changeTheme = createAction('[APP] CHANGE THEME', props<{ theme: ThemeType }>());

export const AppShellActions = {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  changeTheme
};

