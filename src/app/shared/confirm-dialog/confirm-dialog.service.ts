import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogOptions } from './confirm-dialog.component';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class ConfirmDialogService {
  dialogRef: MatDialogRef<ConfirmDialogComponent>;
  constructor(private dialog: MatDialog) { }
  public open(options?: ConfirmDialogOptions) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: options.title || 'Confirm',
        message: options.message || 'Are you sure you want to do this?',
        cancelText: options.cancelText || 'No',
        confirmText: options.confirmText || 'Yes'
      }
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
      return res;
    }
    ));
  }
}
