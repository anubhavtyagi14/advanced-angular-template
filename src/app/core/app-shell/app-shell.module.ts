import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppShellStoreModule } from '@app/core/app-shell/+store';
import { AppShellFacade } from './+store/app-shell.facade';
@NgModule({
  declarations: [
    HeaderComponent,
    NavigationMenuComponent,
    FooterComponent,
    AppContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppShellStoreModule
  ],

  exports: [AppContainerComponent]
})
export class AppShellModule {
  constructor(
    private router: Router,
    private appshellFacade: AppShellFacade
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.appshellFacade.closeSideBar();
      }
    });

  }
}
