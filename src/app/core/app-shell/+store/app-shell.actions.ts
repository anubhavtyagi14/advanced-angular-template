import { createAction } from '@ngrx/store';
const toggleSidebar = createAction('[APP] TOGGLE SIDEBAR');
const openSidebar = createAction('[APP] OPEN SIDEBAR');
const closeSidebar = createAction('[APP] CLOSE SIDEBAR');

export const AppShellActions = {
  toggleSidebar,
  openSidebar,
  closeSidebar
};

