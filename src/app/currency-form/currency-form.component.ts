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
    this.error = { msg: '' , isFormValid : true}
    this.selectedCurrenciesNames = [];
  }

  ngOnInit(){
    this.currencyService.getCurrencyList().subscribe((data)=>{
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
      this.error.isFormValid = false;
      this.error.msg = "Выберите валюту(ы)";
      return false;
    }else{
      this.error.isFormValid = true;
      this.error.msg = '';
    }


      let dateFrom = this.currencyFirstDate.split("-",3);
      let dateTo = this.currencySecondDate.split("-",3);
      let dateNow = new Date();

      if( ( dateFrom[1] !== dateTo[1] && dateFrom[2] - dateTo[2] < 14) ||
          ( dateTo[2] - dateFrom[2] < 0 ) ||
          ( dateFrom[0] !== dateTo[0] ) ||
          ( dateTo[2] - dateFrom[2] > 14) ||
          ( dateFrom[1] === dateTo[1] && dateTo[2] > dateNow.getDate())
      ){
        this.error.isFormValid = false;
        this.error.msg = "Выберите корректный промежуток времени. Период времени можно выбирать не более двух недель";
        return false;
      }
      else
        {
          this.error.isFormValid = true;
          this.error.msg = "";
        }



      let currency;
      this.selectedCurrencies = [];
      for(let currencyName of this.selectedCurrenciesNames){
        currency = this.FindCurrencyByName(currencyName);
        for(let i = dateFrom[2]; i <= dateTo[2]; i++){
          console.log(currency.Cur_ID, dateFrom[0]+'-'+dateFrom[1]+'-0'+ +i);
          this.currencyService.getCurrencyRate(currency.Cur_ID, dateFrom[0]+'-'+dateFrom[1]+'-'+ +i)
              .subscribe((data) => this.selectedCurrencies.push(data));
        }
      }

  }

  /*AddCurrencyList(){
    console.log(this.selectedCurrenciesNames);

    if(this.selectedCurrenciesNames.length == 0){
      this.error.isFormValid = false;
      this.error.msg = "Выберите валюту(ы)";
      return false;
    }else{
      this.error.isFormValid = true;
      this.error.msg = '';
    }


    let dateFrom = this.currencyFirstDate.split("-",3);
    let dateTo = this.currencySecondDate.split("-",3);
    let dateNow = new Date();

    if( ( dateFrom[1] !== dateTo[1] && dateFrom[2] - dateTo[2] < 14) ||
        ( dateTo[2] - dateFrom[2] < 0 ) ||
        ( dateFrom[0] !== dateTo[0] ) ||
        ( dateTo[2] - dateFrom[2] > 14) ||
        ( dateFrom[1] === dateTo[1] && dateTo[2] > dateNow.getDate())
    ){
      this.error.isFormValid = false;
      this.error.msg = "Выберите корректный промежуток времени. Период времени можно выбирать не более двух недель";
      return false;
    }
    else
    {
      this.error.isFormValid = true;
      this.error.msg = "";
    }



    let currency;
    this.selectedCurrencies = [];
    for(let currencyName of this.selectedCurrenciesNames){
      currency = this.FindCurrencyByName(currencyName);
      this.GetCurrencyRateOnRange(currency,this.currencyFirstDate,this.currencySecondDate).subscribe(this.selectedCurrencies.push(this.currencyRateOnRange))
    }

  }

  GetCurrencyRateOnRange(currency, from, to){
    let dateFrom = from.split("-",3);
    let dateTo = to.split("-",3);

    for(let i = dateFrom[2]; i <= dateTo[2]; i++){
      this.currencyService.getCurrencyRate(currency.Cur_ID, dateFrom[0]+'-'+dateFrom[1]+'-'+ +i).subscribe((data) => this.currencyRateOnRange.push(data));
    }
  }*/

  ClearSelectedCurrencies(){
    this.selectedCurrenciesNames = [];
    this.selectedCurrencies = [];
    this.currencySecondDate = '';
    this.currencyFirstDate = '';
  }

}
