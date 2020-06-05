import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { AppShellModule } from '@app/core/app-shell';
import { HttpHelperModule } from '@app/core/http-helper';
import { AuthModule } from '@app/core/auth';
import { NgrxErrorModule } from '@app/core/ngrx-error';
import { NgrxRouterModule } from '@app/core/ngrx-router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AppShellModule,
    HttpHelperModule,
    AuthModule,
    NgrxErrorModule,
    NgrxRouterModule
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
