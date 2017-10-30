import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css'],
})
export class CurrencyFormComponent implements OnInit {
  @Input() currencyList; // Переменная, хранящая список доступных валют
  @Output() addList = new EventEmitter(); // Переменная, с помощью которой можно передать список выбранных валют управляющему компоненту currency-counter.
  public selectedCurrencies; // Массив, хранящий выбранные валюты

  private showList; // Переменная, контролирующая отображение списка доступных для выбора валют

  public currencyFirstDate; // Переменная, хранящая начальную дату
  public currencySecondDate; // Переменная, хранящая конечную дату
  public error; // Объект, отвечающий за наличие и содержание ошибки при неправильно введенных данных

  constructor() {
    this.error = { msg: '' , formValid : true}; // Ошибки нет, форма валидна
    this.selectedCurrencies = [];
    this.showList = false;
  }

  ngOnInit() { }

  // Метод, переключающий отображение списка доступных валют
  ToggleShowList(){
    this.showList = !this.showList;
  }

  // Метод, добавляющий валюту, по которой кликнули, в массив выбранных валют (при наличии этой валюты в массиве, она удаляется из массива выбранных валют)
  AddCurrency(currency){
    if(this.selectedCurrencies.indexOf(currency) != -1)
      this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency),1);
    else
        this.selectedCurrencies.push(currency);
  }

  // Срабатывает при нажатии на кнопку "Получить"
  // Проверяет, правильно ли введены данные. В случае ошибки показывает ошибку и прекращает своё выполнение
  // Если данные корректны - отправляет их управляющему компоненту.
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

  // Срабатывает при нажатии на кнопку "Сброс"
  // Очищает форму.
  ClearSelectedCurrencies(){
    this.selectedCurrencies = [];
    this.currencySecondDate = '';
    this.currencyFirstDate = '';
    this.error.formValid = true;
    this.error.msg = "";
    this.showList = false;
  }

}