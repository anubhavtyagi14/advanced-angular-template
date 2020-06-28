import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonLoadingDirective, ClickOusideDirective } from '@app/shared/directives';
import { CustomMaterialModule } from '@app/shared/angular-material';
import { CustomFormlyModule } from '@app/shared/formly';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';

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
    ConfirmDialogModule,
  ]
})
export class SharedModule { }
