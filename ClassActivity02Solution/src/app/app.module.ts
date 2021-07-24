import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { RunComponent } from './run/run.component';
import { WalkComponent } from './walk/walk.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsComponent,
    RunComponent,
    WalkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

Several things identify this as being a root module:

    the root module has the conventional name of AppModule

    the root module in the case of web applications imports the BrowserModule, which for example provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc.

    the bootstrap property is used, providing a list of components that should be used as bootstrap entry points for the application. There is usually only one element in this array: the root component of the application
*/
