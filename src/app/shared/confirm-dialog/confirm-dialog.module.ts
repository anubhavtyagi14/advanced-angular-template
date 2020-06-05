import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog.service';
import { CustomMaterialModule } from '../angular-material';

@NgModule({
  imports: [
    CustomMaterialModule
  ],
  exports: [],
  declarations: [ConfirmDialogComponent],
  providers: [ConfirmDialogService],
})
export class ConfirmDialogModule { }
