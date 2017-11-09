import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import { FormGroup, FormControl } from '@angular/forms';
import { CurrencyService} from '../currency.service';


@Component({
    selector: 'app-currency-list',
    templateUrl: './currency-list.component.html',
    styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {
    private currencies = []; // Массив курсов полученных валют

    private pages; // Переменная, отвечающая за количество страниц в таблице

    constructor(private curService:CurrencyService) {

        // Подписка на изменение количества страниц
        this.curService.updatePages.subscribe((data) => {
            console.log('pages' + data);
            this.pages = Array(data);
        });

        // Подписка на изменение курсов текущих валют
        this.curService.updateRates.subscribe((data)=> {
            this.currencies = data;
        });
    }

    // Метод, срабатывающий при смене страницы
    GetRatesOnPage(pageNumber:number) {
        this.curService.GetRatesOnPage(pageNumber);
    }
}