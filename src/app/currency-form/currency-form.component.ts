import { Component, OnInit } from '@angular/core';

import { CurrencyService }   from './../currency.service';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css'],
  providers: [ CurrencyService ]
})
export class CurrencyFormComponent implements OnInit {
  public currencyList;
  public selectedCurrenciesNames;
  public selectedCurrencies;

  private currencyRateOnRange;

  public currencyFirstDate;
  public currencySecondDate;
  public error;

  constructor( private currencyService : CurrencyService) {
    this.error = { msg: '' , formValid : true};
    this.currencyRateOnRange = [];
    this.selectedCurrenciesNames = [];
    this.currencyList = [];
  }

  ngOnInit(){
    this.currencyService.getCurrencyList().then((data)=>{
      console.log(data);
      this.currencyList = data;
    });
  }

  FindCurrencyByName(currencyName){
    for(let currency of this.currencyList){
      if(currencyName == currency.Cur_Name)
        return currency;
    }
  }

  AddCurrencyList(){
    console.log(this.selectedCurrenciesNames);

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

    let currency;
    this.selectedCurrencies = [];
    for(let currencyName of this.selectedCurrenciesNames){
      currency = this.FindCurrencyByName(currencyName);
      this.currencyService.getCurrencyRateOnRange(currency.Cur_ID,
                                                  dateFrom.getFullYear()+'-'+dateFrom.getMonth()+'-'+dateFrom.getDate(),
                                                  dateTo.getFullYear()+'-'+dateTo.getMonth()+'-'+dateTo.getDate() ).then(data => {this.selectedCurrencies.push(data);});
    }
  }

  ClearSelectedCurrencies(){
    this.selectedCurrenciesNames = [];
    this.selectedCurrencies = [];
    this.currencySecondDate = '';
    this.currencyFirstDate = '';
  }

}
