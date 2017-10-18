import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { CurrencyService }   from './../currency.service';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css'],
  providers: [ CurrencyService ]
})
export class CurrencyFormComponent implements OnInit {
  @Input() currencyList;
  @Output() addList = new EventEmitter();
  public selectedCurrenciesNames;

  public currencyFirstDate;
  public currencySecondDate;
  public error;

  constructor( private currencyService : CurrencyService) {
    this.error = { msg: '' , formValid : true};
    this.selectedCurrenciesNames = [];
  }

  ngOnInit(){  }

  AddCurrencies(){
    if(this.selectedCurrenciesNames.length == 0){
      this.error.formValid = false;
      this.error.msg = "Выберите валюту(ы)";
      return false;
    }else if(this.selectedCurrenciesNames.length > 15){
      this.error.formValid = false;
      this.error.msg = "Количество валют не должно превышать 15";
      return false;
    }else{
      this.error.formValid = true;
      this.error.msg = '';
    }

    let dateFrom = new Date(this.currencyFirstDate);
    let dateTo = new Date(this.currencySecondDate);
    let dateNow = new Date();

    if( (+dateTo - +dateFrom > 1000*60*60*24*14) ||
        (+dateFrom > +dateTo) )
    {
      this.error.formValid = false;
      this.error.msg = "Выберите корректный промежуток времени. Период времени можно выбирать не более двух недель";
      return false;
    }
    else
    {
      this.error.formValid = true;
      this.error.msg = "";
    }

    let output = [this.selectedCurrenciesNames, this.currencyFirstDate, this.currencySecondDate];
    this.addList.emit(output);
  }

  ClearSelectedCurrencies(){
    this.selectedCurrenciesNames = [];
    this.currencySecondDate = '';
    this.currencyFirstDate = '';
  }

}