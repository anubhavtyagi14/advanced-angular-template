import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgrxErrorFacade } from '../+store/ngrx-error.facade';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  error$ = this.errorFacade.error$;
  constructor(
    private errorFacade: NgrxErrorFacade
    // private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

}
