import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ngrxErrorReducer } from './+store/ngrx-error.reducer';
import { NgrxErrorEffects } from './+store/ngrx-error.effects';
import { ngrxErrorFeatureKey, ngrxErrorInitialState } from './+store/ngrx-error.state';
import { ErrorComponent } from './components/error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgrxErrorInterceptor } from './ngrx-error-interceptor.service';
import { NgrxErrorFacade } from './+store/ngrx-error.facade';
import { ErrorHandlerService } from './ngrx-error.handler';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(ngrxErrorFeatureKey, ngrxErrorReducer, {
      initialState: ngrxErrorInitialState,
    }),
    EffectsModule.forFeature([NgrxErrorEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgrxErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
    NgrxErrorFacade
  ]
})
export class NgrxErrorModule { }
