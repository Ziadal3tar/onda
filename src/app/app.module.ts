import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { SliderComponent } from './components/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HammerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
