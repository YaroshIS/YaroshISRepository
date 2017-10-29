import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css'],
})
export class CurrencyFormComponent implements OnInit {
  @Input() currencyList;
  @Output() addList = new EventEmitter();
  public selectedCurrencies;

  private showList;

  public currencyFirstDate;
  public currencySecondDate;
  public error;

  constructor() {
    this.error = { msg: '' , formValid : true};
    this.selectedCurrencies = [];
    this.showList = false;
  }

  ngOnInit() { }

  ToggleShowList(){
    this.showList = !this.showList;
  }

  AddCurrency(currency){
    if(this.selectedCurrencies.indexOf(currency) != -1)
      this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency),1);
    else
        this.selectedCurrencies.push(currency);
  }


  SendCurrencies(){
    if(this.selectedCurrencies.length == 0){
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

    if( +dateFrom > +dateTo ||
        +dateFrom > +dateNow ||
        +dateTo > +dateNow){
      this.error.formValid = false;
      this.error.msg = "Выберите корректный промежуток времени";
      return false;
    }

    let output = [this.selectedCurrencies, this.currencyFirstDate, this.currencySecondDate];
    this.addList.emit(output);
  }

  ClearSelectedCurrencies(){
    this.selectedCurrencies = [];
    this.currencySecondDate = '';
    this.currencyFirstDate = '';
    this.error.formValid = true;
    this.error.msg = "";
    this.showList = false;
  }

}