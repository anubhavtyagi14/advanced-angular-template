import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey } from './auth.state';
import { authReducer, metaReducers } from './auth.reducer';
import { AuthFacade } from './auth.facade';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, authReducer, { metaReducers }),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthFacade]
})
export class AuthStoreModule { }
