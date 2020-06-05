import { NgModule } from '@angular/core';
// import { ToastrComponent } fro./toastr.component.ts.excludeent';
import { CustomMaterialModule } from '../angular-material';
import { ToastrService } from './toastr.service';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';


@NgModule({
  imports: [],
  exports: [CustomMaterialModule],
  declarations: [],
  providers: [
    ToastrService,
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',

      }
    }
  ],
})
export class ToastrModule { }
