import { Component, OnInit, Input } from '@angular/core';
import { AppShellFacade } from '../+store/app-shell.facade';
export type ThemeType = 'light' | 'dark';
@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html'
})
export class ThemePickerComponent implements OnInit {
  @Input() theme: ThemeType;
  constructor(
    private appShellFacade: AppShellFacade
  ) { }

  ngOnInit(): void {
  }
  onThemeChange() {
    this.theme === 'light' ? this.appShellFacade.changeTheme('dark')
      : this.appShellFacade.changeTheme('light');


  }
}
