import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from '@app/core';
import { AppRoutingModule } from '@app/routing';
import { environment } from '@env/environment';
import { AppComponent, WelcomeComponent } from '@app/components';
import { RootStoreModule } from '@app/+root-store';
import { FormlyModule } from '@ngx-formly/core';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot(),
    CoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'Advanced Angular Template DevTools',
      maxAge: 25
    }) : [],
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
