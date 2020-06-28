import { Injectable, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
// import { ToastrComponent } from './toastr.component.ts.exclude';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { filter, tap, map, takeUntil, delay, take } from 'rxjs/operators';
const Toastr = 'toastr';
export type ToastrType = 'success' | 'info' | 'warning' | 'error';
interface ToastrOptions {
  message: string;
  title?: string;
  action?: string;
  type: ToastrType;
  beingDispatched: boolean;
}

@Injectable()
export class ToastrService {
  // private readonly snackBarQueue = new BehaviorSubject<ToastrOptions[]>([]);
  // private readonly snackBarQueue$ = this.snackBarQueue.asObservable();
  // private readonly ngDestroy = new Subject();
  constructor(private snackBar: MatSnackBar) {

    /* Dispatches all queued snack bars one by one */
    // this.snackBarQueue$
    //   .pipe(
    //     filter(queue => queue.length > 0 && !queue[0].beingDispatched),
    //     tap(() => {
    //       const updatedQueue = this.snackBarQueue.value;
    //       updatedQueue[0].beingDispatched = true;
    //       this.snackBarQueue.next(updatedQueue);
    //     }),
    //     map(queue => queue[0]),
    //     takeUntil(this.ngDestroy))
    //   .subscribe(snackBarItem => this.showSnackbar(snackBarItem.message, snackBarItem.action, snackBarItem.type));
  }
  // public ngOnDestroy() {
  //   this.snackBarQueue.next([]);
  //   this.snackBarQueue.complete();
  //   this.ngDestroy.next();
  //   this.ngDestroy.complete();
  // }

  // private showSnackbar(message: string, action: string, type: ToastrType) {
  //   this.removeDismissedSnackBar(
  //     this.snackBar.open(message, action, { panelClass: [Toastr, type], }).afterDismissed(),
  //   );

  // }
  /* Remove dismissed snack bar from queue and triggers another one to appear */
  // private removeDismissedSnackBar(dismissed: Observable<MatSnackBarDismiss>) {
  //   dismissed
  //     .pipe(
  //       delay(1000),
  //       take(1))
  //     .subscribe(() => {
  //       const updatedQueue = this.snackBarQueue.value;
  //       if (updatedQueue[0].beingDispatched) {
  //         updatedQueue.shift();
  //       }
  //       this.snackBarQueue.next(updatedQueue);
  //     });
  // }

  success(message: string, action?: string) {
    this.open(message, action, 'success');
  }
  warning(message: string, action?: string) {
    this.open(message, action, 'warning');
  }
  info(message: string, action?: string) {
    this.open(message, action, 'info');
  }
  error(message: string, action?: string) {
    this.open(message, action, 'error');
  }
  private open(message: string, action: string = 'Dismiss', type: ToastrType) {
    this.snackBar.open(message, action, {
      panelClass: [Toastr, type],
    });
    // this.snackBarQueue.next(
    //   this.snackBarQueue.value.concat([{ message, action, type, beingDispatched: false }]),
    // );
  }

}
