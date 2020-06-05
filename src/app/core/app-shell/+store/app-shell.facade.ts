import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppShellActions } from './app-shell.actions';
import { appShellQuery } from './app-shell.selectors';
import { AppShellState } from './app-shell.state';
import { ThemeType } from '../theme-picker/theme-picker.component';
@Injectable()
export class AppShellFacade {
  toggleSideBar$ = this.store.select(appShellQuery.getSidebarOpened);
  isDarkTheme$ = this.store.select(appShellQuery.getIsDarkTheme);
  currentTheme$ = this.store.select(appShellQuery.getTheme);
  constructor(
    private store: Store<AppShellState>
  ) { }
  toggleSideBar() {
    this.store.dispatch(AppShellActions.toggleSidebar());
  }
  openSideBar() {
    this.store.dispatch(AppShellActions.openSidebar());
  }
  closeSideBar() {
    this.store.dispatch(AppShellActions.closeSidebar());
  }
  changeTheme(theme: ThemeType) {
    this.store.dispatch(AppShellActions.changeTheme({ theme }));
  }
}
