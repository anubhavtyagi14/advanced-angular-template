import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingButtonsComponent } from '@app/examples/components/loading-buttons/loading-buttons.component';
import { ExampleRoutes } from './examples.routes';
import { HomeComponent } from '../components/home/home.component';
import { LoaderExampleComponent } from '../components/loader-example/loader-example.component';
import { FormlyExampleComponent } from '../components/formly-example/formly-example.component';


const routes: Routes = [
  {
    path: ExampleRoutes.DEFAULT.path, component: HomeComponent,
    children: [
      {
        path: ExampleRoutes.LOADING_BUTTONS.path, component: LoadingButtonsComponent
      },
      {
        path: ExampleRoutes.APP_LOADER.path, component: LoaderExampleComponent
      },
      {
        path: ExampleRoutes.FORMLY_EXAMPLE.path, component: FormlyExampleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
