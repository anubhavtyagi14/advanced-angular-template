
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './routing/examples-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { LoadingButtonsComponent } from './components/loading-buttons/loading-buttons.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderExampleComponent } from './components/loader-example/loader-example.component';
import { FormlyExampleComponent } from './components/formly-example/formly-example.component';
import { FormlyModule } from '@ngx-formly/core';
import { LoaderModule } from '@app/core/loader';


@NgModule({
  declarations: [
    HomeComponent,
    LoadingButtonsComponent,
    LoaderExampleComponent,
    FormlyExampleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoaderModule,
    FormsModule,
    FormlyModule.forChild(),
    ExamplesRoutingModule

  ],
  providers: [],
})
export class ExamplesModule { }
