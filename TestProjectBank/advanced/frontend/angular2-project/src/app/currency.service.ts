import {Injectable, Output, EventEmitter} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, RequestMethod}       from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyGraphicsComponent } from './currency-graphics/currency-graphics.component';

@Injectable()
export class CurrencyService {

    private selectedCurs = [];
    private dateFrom;
    private dateTo;
    private COUNT_OF_CURS_PER_REQUEST = 3; // Количество графиков/столбцов, которые впоследствии будут отображаться на графике/в таблице

    // Переменная, которая хранит запрошенный курсы валют. На эту переменную подписаны компоненты график currency-graphics и таблица currency-list
    @Output() updateRates = new EventEmitter();

    // Переменная, которая хранит количество страниц в компонентах currency-graphics и currency-list
    @Output() updatePages = new EventEmitter();

    constructor(private http:Http) {
    }

    // GET Запрос на получение всех доступных для выбора валют
    getCurrencyList() {
        return this.http.get('http://angular.f.dev/api/get-currencies');
    }

    // POST запрос на получение курсов валют по ID на дату с this.dateFrom по this.dateTo;
    // Ответ от сервера - массив, каждый элемент которого также является массивом и содержит в себе курсы валюты на запрошенный период
    // Т.к. в этом вложенном массиве нет имени валюты (есть только ID), то метод первому элементу массива присваивает
    // имя валюты через метод urIDtoName. Это нужно для дальнейшего отображения в графике и таблице
    getCurrenciesRates(cursID) {
        let url = 'http://angular.f.dev/api/get-currencies-rate-on-range';

        let headers = new Headers();

        let options = new RequestOptions({headers: headers, method: 'post'});

        let data = new URLSearchParams();
        data.set('cursID', JSON.stringify(cursID));
        data.set('dateFrom', JSON.stringify(this.dateFrom));
        data.set('dateTo', JSON.stringify(this.dateTo));

        this.http.post(url, data, options).subscribe(response => {
            let resp = response.json();
            for (let respCur of resp) {
                respCur[0].Cur_Name = this.CurIDtoName(respCur[0].Cur_ID);
            }
            this.updateRates.emit(resp);
        });
    }

    // Метод, принимающий выбранные валюты и период от формы
    getSelectedCurrencies(curs, dateFrom, dateTo) {
        this.selectedCurs = curs;

        this.dateFrom = dateFrom;
        this.dateTo = dateTo;

        let allIDs = [];
        for (let currency of this.selectedCurs) {
            allIDs.push(currency.Cur_ID);
        }

        let firstIDs = allIDs.slice(0, this.COUNT_OF_CURS_PER_REQUEST);
        let countOfPages = Math.ceil(this.selectedCurs.length / this.COUNT_OF_CURS_PER_REQUEST);

        this.updatePages.emit(countOfPages);
        this.getCurrenciesRates(firstIDs);
    }

    // Метод, возвращающий количество максимально отображаемых графиков/столбцов в компоненте currency-graphics/currency-list
    public GetCountOfCursPerRequest() {
        return this.COUNT_OF_CURS_PER_REQUEST;
    }

    // Метод, который срабатывает при смене страницы либо в таблице, либо на графике.
    // Формирует нужные ID и делает запрос на сервер через метод getCurrenciesRates.
    public GetRatesOnPage(pageNumber) {
        let startIndex = pageNumber * this.COUNT_OF_CURS_PER_REQUEST;
        let requestedCurs = this.selectedCurs.slice(startIndex, startIndex + this.COUNT_OF_CURS_PER_REQUEST);

        let IDs = [];
        for (let cur of requestedCurs) {
            IDs.push(cur.Cur_ID);
        }

        this.getCurrenciesRates(IDs);
    }

    // Метод, возвращающий ID валюты по её имени
    private CurIDtoName(curID) {
        for (let currency of this.selectedCurs) {
            if (currency.Cur_ID == curID) {
                return currency.Cur_Name;
            }
        }
    }
}