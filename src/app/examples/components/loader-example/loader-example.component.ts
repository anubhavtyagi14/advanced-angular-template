import { Component, ChangeDetectionStrategy, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { map, take, delay, withLatestFrom, finalize, tap } from 'rxjs/operators';
import { LoaderComponent } from '@app/core/loader';
import { ToastrService, ToastrType } from '@app/core/toastr';

@Component({
  selector: 'app-loader-example',
  templateUrl: './loader-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      padding: 64px 32px;
      display: block;
    },
    .example-button-row {
      display: table-cell;
    }

    .example-button-row button {
      display: table-cell;
      margin-right: 8px;
    }
  `],
})
export class LoaderExampleComponent implements OnDestroy, OnInit {
  timer = 0;

  // delayedProgress$ = this.loader.progress$.pipe(
  //   delay(1000),
  //   withLatestFrom(this.loader.progress$),
  //   map(v => v[1]),
  // );
  @ViewChild('loader') private loader: LoaderComponent;
  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {
  }
  ngOnInit() {

  }
  ngOnDestroy() {
    this.loader.destroy();
  }
  start() {
    this.loader.start();
  }

  set() {
    this.loader.set(50);
  }

  increment() {
    this.loader.increment(10);
  }

  complete() {
    this.loader.complete();
  }

  destroy() {
    this.loader.destroy();
  }

  startTimer() {
    interval(1000).pipe(
      take(3),
      tap(value => { this.timer = value + 1; }),
      finalize(() => this.loader.complete()),
    ).subscribe();

    // We're sure that subscription has been made, we can start loading bar service
    this.loader.start();
  }
  showToastr(type: ToastrType) {
    switch (type) {
      case 'error':
        this.toastr.error('This is error !!!');
        break;
      case 'info':
        this.toastr.info('This is error !!!');
        break;
      case 'success':
        this.toastr.success('This is success !!!');
        break;
      case 'warning':
        this.toastr.warning('This is warning !!!');
        break;
      default:
        this.toastr.info('This is information !!!');
        break;
    }




  }
}
