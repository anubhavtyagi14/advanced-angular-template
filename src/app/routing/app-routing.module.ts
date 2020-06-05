import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninRedirectCallbackComponent, SignoutRedirectCallbackComponent } from '@app/core';
import { WelcomeComponent } from '@app/components';
import { AppRoutes } from './app.routes';
import { ExampleRoutes } from '@app/examples';
import { environment } from '@env/environment';


const routes: Routes = [
  { path: AppRoutes.WELCOME.path, component: WelcomeComponent },
  { path: AppRoutes.SIGNIN_CALLBACK.path, component: SigninRedirectCallbackComponent },
  { path: AppRoutes.SIGNOUT_CALLBACK.path, component: SignoutRedirectCallbackComponent },
  { path: ExampleRoutes.HOME.path, loadChildren: () => import('@app/examples').then(m => m.ExamplesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: !environment.production,
    scrollPositionRestoration: 'enabled',
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
