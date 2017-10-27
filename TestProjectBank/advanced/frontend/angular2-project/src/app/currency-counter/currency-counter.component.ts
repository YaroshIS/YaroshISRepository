import {Component, OnInit, ViewChild} from '@angular/core';

import {CurrencyService} from "../currency.service";

import { CurrencyListComponent } from '../currency-list/currency-list.component';
import {CurrencyGraphicsComponent} from "../currency-graphics/currency-graphics.component";

@Component({
  selector: 'app-currency-counter',
  templateUrl: './currency-counter.component.html',
  styleUrls: ['./currency-counter.component.css']
})
export class CurrencyCounterComponent implements OnInit {
  @ViewChild(CurrencyListComponent) listComponent : CurrencyListComponent;
  @ViewChild(CurrencyGraphicsComponent) graphicsComponent : CurrencyGraphicsComponent;
  public currencyList;

  constructor(private currencyService : CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.getCurrencyList()
        .then((data) => this.currencyList = data);
  }

  TestAddSelectedCurrencies(selectedCurr_dateFrom_dateTo){
    let selectedCurrencies = selectedCurr_dateFrom_dateTo[0];
    let dateFrom = selectedCurr_dateFrom_dateTo[1];
    let dateTo = selectedCurr_dateFrom_dateTo[2];

    let selectedID = [];

    for(let selectedCurr of selectedCurrencies){
      selectedID.push(selectedCurr.Cur_ID);
    }

    this.graphicsComponent.GetSelectedCurrencies(selectedID,dateFrom,dateTo);
    this.listComponent.GetSelectedCurrencies(selectedID,dateFrom,dateTo);
  }

  TestGetRates(ID_dateFrom_dateToCurrent_dateTo){
    let ID = ID_dateFrom_dateToCurrent_dateTo[0];
    let dateFrom = ID_dateFrom_dateToCurrent_dateTo[1];
    let dateToCurrent = ID_dateFrom_dateToCurrent_dateTo[2];
    let dateTo = ID_dateFrom_dateToCurrent_dateTo[3];

    this.currencyService.getCurrenciesRateOnRange(ID,dateFrom,dateToCurrent)
        .then((data) => {
          this.listComponent.GetRates(data);
        });
  }

  GetRatesToGraphics(ID_dates){
    let ID = ID_dates[0];
    let dates = ID_dates[1];

    this.currencyService.getCurrenciesRatesOnDates(ID,dates)
        .then(response => this.graphicsComponent.GetRates(response));
  }

}