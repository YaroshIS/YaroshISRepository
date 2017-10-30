import {Component, OnInit, ViewChild} from '@angular/core';

import {CurrencyService} from "../currency.service";

import { CurrencyListComponent } from '../currency-list/currency-list.component';
import {CurrencyGraphicsComponent} from "../currency-graphics/currency-graphics.component";

@Component({
  selector: 'app-currency-counter',
  templateUrl: './currency-counter.component.html',
  styleUrls: ['./currency-counter.component.css']
})

//Главный управляющий компонент. Принимает данные от компонентов, приводит к нужному виду, отсылает их к сервису, принимает от него ответы и возвращает результаты компонентам.
export class CurrencyCounterComponent implements OnInit {
  @ViewChild(CurrencyListComponent) listComponent : CurrencyListComponent; // переменная, позволяющая использовать методы компонента currency-list (Таблицы)
  @ViewChild(CurrencyGraphicsComponent) graphicsComponent : CurrencyGraphicsComponent; // переменная, позволяющая использовать методы компонента currency-graphics (Графика)
  public currencyList; // массив, хранящий все доступные валюты.

  constructor(private currencyService : CurrencyService) { // получаем экземпляр сервиса для возможности отправки запросов на сервер
  }

  // Срабатывает при инициализации компонента.
  // Делает запрос на получение всех доступных валют и в виде массива передаёт их компоненту currency-form
  ngOnInit() {
    this.currencyService.getCurrencyList()
        .then((data) => this.currencyList = data);
  }

  // Срабатывает при нажатии на кнопку "Получить"
  // Принимает выделенные валюты и даты от компонента формы.
  // Отправляет компоненту графика начальную и конечные даты
  // Отправляет ID выбранных валют, начальную и конечные даты в компонент таблицы.
  GetSelectedCurrencies(selectedCurr_dateFrom_dateTo){ // Этот метод вызывается из дочернего компонента currency-form. Такие методы, принимают один аргумент $event, поэтому переменную я так коряво назвал, чтобы дать ей какой-то смысл)
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

  // Срабатывает, когда компонент currency-list делает запрос на получение курсов определенных валют на период времени
  // Такие запросы возникают либо при переключении страницы в таблице, либо при нажатии на кнопку "Show More Dates"
  // Принимает ID валют и период времени, которые нужны на данный момент в таблицу.
  // При переключении страницы в графике валюты также должны меняться, поэтому метод отсылает данные ещё и графику (при условии, что мы переключаем страницу)
  // Отсылает запрос к сервису на получение нужных курсов валют и передаёт их обратно компоненту currency-list.
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

  // Срабатывает, когда компонент currency-graphics делает запрос на получение курсов валют с начального по конечный период времени.
  // Валюты будут соответсвовать тем, что отображаются на данный момент в таблице.
  // В качестве аргументов здесь выступают 1. ID нужных валют; 2. Начальная дата; 3. Конечная дата; 4. Количество дат (т.к. в графике отображается ограниченное кол-во значений)
  // Отсылает запрос к сервису и возвращает результат в компонент currency-graphics
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

  // Метод для получения ID валюты по её имени
  private CurIDtoName(curID){
    for(let currency of this.currencyList){
      if(currency.Cur_ID == curID) return currency.Cur_Name;
    }
  }
}