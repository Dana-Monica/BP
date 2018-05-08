import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { SharedInfoComponent } from './shared-info/shared-info.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAllMmWZe0C5VUwmLpqRd5qZt6wobKWsdw'
    })
  ],
  providers: [],
  declarations: [ AppComponent, SharedInfoComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


