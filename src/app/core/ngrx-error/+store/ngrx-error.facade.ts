import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { NgrxErrorActions } from './ngrx-error.actions';
import { NgrxErrorState } from './ngrx-error.state';
import { errorQuery } from './ngrx-error.selectors';

@Injectable()
export class NgrxErrorFacade {
  error$ = this.store.select(errorQuery.getError);
  errorMessage$ = this.store.select(errorQuery.getErrorMessage);
  errorCode$ = this.store.select(errorQuery.getErrorCode);
  constructor(private store: Store<NgrxErrorState>) { }

  throw401Error(error: HttpErrorResponse) {
    this.store.dispatch(NgrxErrorActions.throw401Error({ error }));
  }
  throw403Error(error: HttpErrorResponse) {
    this.store.dispatch(NgrxErrorActions.throw403Error({ error }));
  }

  throw404Error(error: HttpErrorResponse) {
    this.store.dispatch(NgrxErrorActions.throw404Error({ error }));
  }
}
