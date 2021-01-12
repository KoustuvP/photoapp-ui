import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './interceptor/mock.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: environment.mock ? MockInterceptor : null,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
