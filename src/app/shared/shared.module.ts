import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonLoadingDirective, ClickOusideDirective } from '@app/shared/directives';
import { CustomMaterialModule } from '@app/shared/angular-material';
import { LoaderModule } from '@app/shared/loader';
import { CustomFormlyModule } from '@app/shared/formly';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { ToastrModule } from './toastr/toastr.module';

@NgModule({
  declarations: [
    MatButtonLoadingDirective,
    ClickOusideDirective
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CustomMaterialModule,
    CustomFormlyModule,
    MatButtonLoadingDirective,
    ClickOusideDirective,
    LoaderModule,
    ConfirmDialogModule,
    ToastrModule
  ]
})
export class SharedModule { }
