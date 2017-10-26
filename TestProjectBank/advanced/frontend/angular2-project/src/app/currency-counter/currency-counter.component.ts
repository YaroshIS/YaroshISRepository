import {Component, OnInit, ViewChild} from '@angular/core';

import {CurrencyService} from "../currency.service";

import { CurrencyListComponent } from '../currency-list/currency-list.component';

@Component({
  selector: 'app-currency-counter',
  templateUrl: './currency-counter.component.html',
  styleUrls: ['./currency-counter.component.css']
})
export class CurrencyCounterComponent implements OnInit {
  @ViewChild(CurrencyListComponent) listOfCurrencies : CurrencyListComponent;

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

    this.listOfCurrencies.GetSelectedCurrencies(selectedID,dateFrom,dateTo);
  }

  TestGetRates(ID_dateFrom_dateTo){
    let ID = ID_dateFrom_dateTo[0];
    let dateFrom = ID_dateFrom_dateTo[1];
    let dateTo = ID_dateFrom_dateTo[2];

    this.currencyService.getCurrenciesRateOnRange(ID,dateFrom,dateTo)
        .then((data) => {
          this.listOfCurrencies.GetRates(data);
        });
  }

}