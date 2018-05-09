import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { SharedInfoComponent } from './shared-info/shared-info.component';
import {GeolocationService} from "./geolocation.service";


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAllMmWZe0C5VUwmLpqRd5qZt6wobKWsdw'
    })
  ],
  providers: [GeolocationService],
  declarations: [ AppComponent, SharedInfoComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


