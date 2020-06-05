import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { shareReplay, map } from 'rxjs/operators';
import { AppShellFacade } from '../+store/app-shell.facade';
@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  toggleSideBar$: Observable<boolean> = this.appFacade.toggleSideBar$;
  isDarkTheme$: Observable<boolean> = this.appFacade.isDarkTheme$;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appFacade: AppShellFacade
  ) { }


  ngOnInit(): void {
  }

}
