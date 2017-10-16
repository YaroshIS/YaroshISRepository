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
    }else{
      this.error.formValid = true;
      this.error.msg = '';
    }

    let dateFrom = new Date(this.currencyFirstDate);
    let dateTo = new Date(this.currencySecondDate);
    let dateNow = new Date();

    if( ( dateFrom.getMonth() !== dateFrom.getMonth() && dateFrom.getDate() - dateTo.getDate() < 14) ||
        ( dateTo.getDate() - dateFrom.getDate() < 0 ) ||
        ( dateFrom.getFullYear() !== dateTo.getFullYear() ) ||
        ( dateFrom.getMonth() < dateTo.getMonth()-1 ) ||
        ( dateTo.getDate() - dateFrom.getDate() > 14) ||
        ( dateFrom.getMonth() === dateTo.getMonth() && dateTo.getDate() > dateNow.getDate())
    ){
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
