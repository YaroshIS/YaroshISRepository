import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-currency-list',
    templateUrl: './currency-list.component.html',
    styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
    @Input() currenciesRates;

    constructor() {
    }
    
    ngOnInit() {
    }

}