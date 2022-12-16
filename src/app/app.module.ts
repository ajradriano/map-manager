import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { MapViewComponent } from './components/map/map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
