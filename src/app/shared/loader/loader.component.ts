import { Component, Input, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { NgProgress, NgProgressRef, NgProgressConfig } from 'ngx-progressbar';
@Component({
  selector: 'app-loader',
  template: `
    <!-- <ng-container *ngIf="progressRef.state | async as state">
      <mat-progress-bar *ngIf="state.active" [value]="state.value"></mat-progress-bar>
   </ng-container>
   <ng-container *ngIf="routerProgressRef.state | async as routerstate">
      <mat-progress-bar *ngIf="routerstate.active" [value]="routerstate.value"></mat-progress-bar>
   </ng-container> -->
   <ng-progress [id]="id" [spinner]="true" [spinnerPosition]="'right'" [speed]="200"  [trickleSpeed]="300" [thick]="true" [meteor]="true"
             [color]="'#e91e63'" [ease]="'linear'" [fixed]="true"></ng-progress>
  `,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[attr.fixed]': 'fixed',
    '[style.color]': 'color',
  },
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private progressRef: NgProgressRef;
  constructor(private ngProgress: NgProgress

  ) { }
  ngOnInit() {
    this.progressRef = this.ngProgress.ref(this.id);
  }
  start() { this.progressRef.start(); }

  set(value: number) { this.progressRef.set(value); }

  increment(value?: number) { this.progressRef.inc(value); }

  complete() { this.progressRef.complete(); }

  destroy() { this.progressRef.destroy(); }
  setConfig(config: NgProgressConfig) { this.progressRef.setConfig(config); }
  ngOnDestroy() {
    this.progressRef.destroy();
  }
}
