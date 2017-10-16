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
        .then((data) => {this.currencyList = data; console.log(data)});
  }

  FindCurrencyByName(currencyName){
    for(let currency of this.currencyList){
      if(currencyName == currency.Cur_Name)
        return currency;
    }
  }

  AddSelectedCurrencies(selectedCurrenciesNames: string[]){
    console.log(selectedCurrenciesNames);
    let currenciesRates= selectedCurrenciesNames[0];
    let dateFrom = new Date(selectedCurrenciesNames[1]);
    let dateTo = new Date(selectedCurrenciesNames[2]);

    let currency;
    this.currenciesRates= [];
    for(let currencyName of currenciesRates){
      currency = this.FindCurrencyByName(currencyName);
      this.currencyService.getCurrencyRateOnRange(currency.Cur_ID,
          dateFrom.getFullYear()+'-'+dateFrom.getMonth()+'-'+dateFrom.getDate(),
          dateTo.getFullYear()+'-'+dateTo.getMonth()+'-'+dateTo.getDate() ).then(data => {this.currenciesRates.push(data)});
    }
  }

}
