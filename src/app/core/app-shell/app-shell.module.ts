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
import { FormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
@NgModule({
  declarations: [
    HeaderComponent,
    NavigationMenuComponent,
    FooterComponent,
    AppContainerComponent,
    ThemePickerComponent,
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
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    // If dark mode is enabled then directly switch to the dark-theme
    if (darkModeOn) {
      this.appshellFacade.changeTheme('dark');
    }

    // Watch for changes of the preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const turnOn = e.matches;
      this.appshellFacade.changeTheme(turnOn ? 'dark' : 'light');
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
