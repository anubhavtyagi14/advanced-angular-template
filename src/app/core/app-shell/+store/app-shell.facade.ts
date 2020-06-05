import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppShellActions } from './app-shell.actions';
import { appShellQuery } from './app-shell.selectors';
import { AppShellState } from './app-shell.state';
@Injectable()
export class AppShellFacade {
  toggleSideBar$ = this.store.select(appShellQuery.getSidebarOpened);
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
}
