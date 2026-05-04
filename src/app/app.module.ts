import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './challange01/user-card/user-card.component';
import { CounterComponent } from './challange04/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    CounterComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
