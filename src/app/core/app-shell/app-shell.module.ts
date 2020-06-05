import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { RouterModule, Router, NavigationStart } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppShellStoreModule } from '@app/core/app-shell/+store';
import { AppShellFacade } from './+store/app-shell.facade';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { AngularMaterialLayoutModule } from './angular-material-layout.module';
import { ThemeIconComponent } from './theme-icon/theme-icon.component';
import { FormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { filter } from 'rxjs/operators';
@NgModule({
  declarations: [
    HeaderComponent,
    NavigationMenuComponent,
    FooterComponent,
    AppContainerComponent,
    ThemePickerComponent,
    ThemeIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LayoutModule,
    AngularMaterialLayoutModule,
    AppShellStoreModule
  ],

  exports: [AppContainerComponent]
})
export class AppShellModule {
  isDarkTheme$ = this.appshellFacade.isDarkTheme$;
  constructor(
    private router: Router,
    private appshellFacade: AppShellFacade,
    overlayContainer: OverlayContainer
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.appshellFacade.closeSideBar();
      }
    });
    this.isDarkTheme$.subscribe(val => {
      if (val) {
        overlayContainer.getContainerElement().classList.add('dark-theme');
      } else {
        overlayContainer.getContainerElement().classList.remove('dark-theme');
      }

    });

  }
}
