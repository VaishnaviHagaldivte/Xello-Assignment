import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { TooltipbuttonsComponent } from './tooltipbuttons/tooltipbuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavcomponentComponent,
    TooltipbuttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
