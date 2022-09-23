import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './libs/directives/color.directive';
import { FirstComponent } from './components/first/first.component';
import { DynamicColorDirective } from './libs/directives/dynamic-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    FirstComponent,
    DynamicColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
