import {Component, OnInit, Input} from '@angular/core';

import {CurrencyService}   from './../currency.service';

@Component({
    selector: 'app-currency-list',
    templateUrl: './currency-list.component.html',
    styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
    @Input() currenciesRates;
    
    constructor(private currencyService: CurrencyService) {
    }
    
    ngOnInit() {
    }

}