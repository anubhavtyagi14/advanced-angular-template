import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
/**
 * Interface to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export interface ConfirmDialogOptions {
  cancelText?: string;
  confirmText?: string;
  message?: string;
  title?: string;
}
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogOptions,
    private mdDialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
  }
  public cancel() {
    this.close(false);
  }
  public close(value) {
    this.mdDialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
  @HostListener('keydown.esc')
  public onEsc() {
    this.close(false);
  }
}
