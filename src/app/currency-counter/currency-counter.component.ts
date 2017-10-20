import { Component, OnInit } from '@angular/core';

import {CurrencyService} from "../currency.service";

@Component({
  selector: 'app-currency-counter',
  templateUrl: './currency-counter.component.html',
  styleUrls: ['./currency-counter.component.css']
})
export class CurrencyCounterComponent implements OnInit {

  public currencyList;
  public currenciesRates;
  public selectedCurrenciesNames;

  constructor(private currencyService : CurrencyService) {
    this.currenciesRates= [];
  }

  ngOnInit() {
    this.currencyService.getCurrencyList()
        .then((data) => this.currencyList = data);
  }

  FindCurrencyByName(currencyName){
    for(let currency of this.currencyList){
      if(currencyName == currency.Cur_Name)
        return currency;
    }
  }

  AddSelectedCurrencies(selectedCurrencies){
    let currenciesRates = selectedCurrencies[0];
    let dateFrom = new Date(selectedCurrencies[1]);
    let dateTo = new Date(selectedCurrencies[2]);

    let monthFrom = dateFrom.getMonth() + 1;
    let monthTo = dateTo.getMonth() +1;

    this.currenciesRates= [];
    for(let currency of currenciesRates){
      this.currencyService.getCurrencyRateOnRange(currency.Cur_ID,
          dateFrom.getFullYear()+'-'+monthFrom +'-'+dateFrom.getDate(),
          dateTo.getFullYear()+'-'+monthTo +'-'+dateTo.getDate() ).then(data => {this.currenciesRates.push(data)});
    }
  }

}