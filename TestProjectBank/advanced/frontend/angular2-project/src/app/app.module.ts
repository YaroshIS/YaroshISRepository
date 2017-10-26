import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyService }       from './currency.service';
import { CurrencyCounterComponent } from './currency-counter/currency-counter.component';
import { CurrencyGraphicsComponent } from './currency-graphics/currency-graphics.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyFormComponent,
    CurrencyCounterComponent,
    CurrencyGraphicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
      CurrencyService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

