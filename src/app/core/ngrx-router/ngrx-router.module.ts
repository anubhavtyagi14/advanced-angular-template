import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './+store/router.effects';
import { CustomSerializer } from './+store/custom-serializer';
import { routerStateFeatureKey } from './+store/router.state';
import { NgrxRouterFacade } from './+store/router.facade';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(routerStateFeatureKey, routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: routerStateFeatureKey }),
  ],
  providers: [
    RouterEffects, [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
    NgrxRouterFacade
  ]
})
export class NgrxRouterModule {

}
