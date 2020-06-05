import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgrxRouterActions } from '../../ngrx-router';
import { Router } from '@angular/router';
import { AuthFacade } from '../+store/auth.facade';

@Component({
  selector: 'app-signout-callback',
  template: `<div></div>`
})

export class SignoutRedirectCallbackComponent implements OnInit {
  constructor(
    // private authService: AuthService,
    // private router: Router
    private authFacade: AuthFacade
  ) { }

  ngOnInit() {
    // this.authService.completeLogout().subscribe(res =>
    //   // res && NgrxRouterActions.go({ to: { path: ['/'], replaceUrl: true } })
    //   this.router.navigate(['/'], { replaceUrl: true })
    // );
    this.authFacade.logoutComplete();
  }
}
