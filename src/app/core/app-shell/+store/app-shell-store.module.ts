import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appShellReducer } from './app-shell.reducer';
import { appShellInitialState, appShellFeatureKey } from './app-shell.state';
import { AppShellFacade } from './app-shell.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(appShellFeatureKey, appShellReducer, {
      initialState: appShellInitialState,
    })
  ],
  providers: [AppShellFacade],
})
export class AppShellStoreModule { }
