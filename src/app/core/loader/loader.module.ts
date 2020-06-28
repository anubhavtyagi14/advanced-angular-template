import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  exports: [NgProgressModule, NgProgressHttpModule,
    NgProgressRouterModule, LoaderComponent]
})
export class LoaderModule { }
