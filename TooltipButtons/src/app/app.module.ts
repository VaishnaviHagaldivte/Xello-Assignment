import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { TooltipbuttonsComponent } from './tooltipbuttons/tooltipbuttons.component';
import { BtntooltipDirective } from './btntooltip.directive';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavcomponentComponent,
    TooltipbuttonsComponent,
    BtntooltipDirective,
    KnowmoreComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
