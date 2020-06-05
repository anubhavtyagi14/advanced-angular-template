import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
@NgModule({
  imports: [
  ],
  exports: [
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,
  ],
  providers: [],
})
export class CustomFormlyModule { }
