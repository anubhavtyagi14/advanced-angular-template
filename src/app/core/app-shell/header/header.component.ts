import { Component, OnInit } from '@angular/core';
import { AppShellFacade } from '../+store/app-shell.facade';
import { AuthFacade } from '@app/core/auth';
import { ExampleRoutes } from '@app/examples/routing/examples.routes';
import { Router } from '@angular/router';
import { NgrxRouterFacade } from '@app/core/ngrx-router/+store/router.facade';
import { AppConstant } from '@app/shared/helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggenIn$ = this.authFacade.isLoggedIn$;
  currentTheme$ = this.appShellFacade.currentTheme$;
  user$ = this.authFacade.user$;
  showExample = true;
  appTitle = AppConstant.applicationName;
  constructor(
    private appShellFacade: AppShellFacade,
    // private authService: AuthService
    private authFacade: AuthFacade,
    private router: NgrxRouterFacade
  ) { }

  ngOnInit(): void {
    // this.authService.loginChanged.subscribe(res => this.isLoggenIn = res);
  }
  toggleDrawer() {
    this.appShellFacade.toggleSideBar();
  }
  closeDrawer() {
    this.appShellFacade.closeSideBar();
  }
  login() {
    // this.authService.login();
    this.authFacade.login();
  }
  logout() {
    // this.authService.logout();
    this.authFacade.logout();
  }
  gotoExamples() {
    // NgrxRouterActions.go({ to: { path: [ExampleRoutes.HOME.path] } });
    this.router.go({ path: [ExampleRoutes.HOME.path] });
  }
}
