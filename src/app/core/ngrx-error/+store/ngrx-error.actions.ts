import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const throw401Error = createAction('[ngrx-error] THROW_401_ERROR', props<{ error: HttpErrorResponse }>());
const throw403Error = createAction('[ngrx-error] THROW_403_ERROR', props<{ error: HttpErrorResponse }>());
const throw404Error = createAction('[ngrx-error] THROW_404_ERROR', props<{ error: HttpErrorResponse }>());

export const NgrxErrorActions = {
  throw401Error,
  throw403Error,
  throw404Error
};
