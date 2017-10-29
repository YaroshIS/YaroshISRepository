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

  GetSelectedCurrencies(selectedCurr_dateFrom_dateTo){
    let selectedCurrencies = selectedCurr_dateFrom_dateTo[0];
    let dateFrom = selectedCurr_dateFrom_dateTo[1];
    let dateTo = selectedCurr_dateFrom_dateTo[2];

    let selectedID = [];

    for(let selectedCurr of selectedCurrencies){
      selectedID.push(selectedCurr.Cur_ID);
    }

    this.graphicsComponent.GetDates(dateFrom,dateTo);

    this.listComponent.GetSelectedCurrencies(selectedID,dateFrom,dateTo);
  }

  GetRates(ID_dateFrom_dateToCurrent){
    let ID = ID_dateFrom_dateToCurrent[0];
    let dateFrom = ID_dateFrom_dateToCurrent[1];
    let dateToCurrent = ID_dateFrom_dateToCurrent[2];

    if(this.graphicsComponent.GetSelectedID(ID)){
      this.graphicsComponent.SendRequest();
    }

    this.currencyService.getCurrenciesRateOnRange(ID,dateFrom,dateToCurrent)
        .then((data) => {
          for(let currencyOnRange of data){
            currencyOnRange[0].Cur_Name = this.CurIDtoName(currencyOnRange[0].Cur_ID);
          }
          this.listComponent.GetRates(data);
        });
  }

  GetRatesToGraphics(ID_dates){
    let ID = ID_dates[0];
    let dateFrom = ID_dates[1];
    let dateTo = ID_dates[2];
    let countOfRates = ID_dates[3];

    this.currencyService.getCurrenciesRatesOnDates(ID,dateFrom,dateTo,countOfRates)
        .then(response => {
          for(let currencyOnRange of response){
            currencyOnRange[0].Cur_Name = this.CurIDtoName(currencyOnRange[0].Cur_ID);
          }
          this.graphicsComponent.GetRates(response)
        } );
  }

  private CurIDtoName(curID){
    for(let currency of this.currencyList){
      if(currency.Cur_ID == curID) return currency.Cur_Name;
    }
  }
}