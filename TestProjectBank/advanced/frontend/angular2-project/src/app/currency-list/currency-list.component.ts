import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-currency-list',
    templateUrl: './currency-list.component.html',
    styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
    @Output() getRates = new EventEmitter();
    @Output() getMoreRates = new EventEmitter();

    private currencies;
    private selectedID;
    private currentID;

    private dateFrom;
    private dateTo;
    private dateToCurrent;

    private pages;
    private page;

    private COUNT_OF_ELEMENTS_ON_PAGE;
    private DATE_PERIOD;

    constructor() {
        this.currencies = [];
        this.dateFrom = "";
        this.dateTo = "";
        this.currentID = [];
        this.COUNT_OF_ELEMENTS_ON_PAGE = 3;
        this.DATE_PERIOD = 6;
    }
    
    ngOnInit() {
    }

    GetRatesOnPage(pageNumber: number) {
        this.page = pageNumber;

        this.currencies = [];

        this.dateToCurrent = this.addDaysToDate(this.dateFrom,this.DATE_PERIOD);

        if( +(new Date(this.dateToCurrent)) > +(new Date(this.dateTo)))
            this.dateToCurrent = this.dateTo;

        let maxSelectedCurr = (pageNumber)*this.COUNT_OF_ELEMENTS_ON_PAGE + this.COUNT_OF_ELEMENTS_ON_PAGE-1 > this.selectedID.length-1 ? this.selectedID.length-1 : (pageNumber)*this.COUNT_OF_ELEMENTS_ON_PAGE + this.COUNT_OF_ELEMENTS_ON_PAGE-1;

        this.currentID = [];
        for(let i = (pageNumber)*this.COUNT_OF_ELEMENTS_ON_PAGE; i <= maxSelectedCurr; i++){
            this.currentID.push(this.selectedID[i]);
        }

        let output = [this.currentID, this.dateFrom, this.dateToCurrent];

        this.getRates.emit(output);
    }

    GetSelectedCurrencies(selectedID,dateFrom,dateTo){
        this.currencies = [];
        this.selectedID = selectedID;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateToCurrent = this.addDaysToDate(dateFrom,this.DATE_PERIOD);

        this.pages = Array(Math.ceil(selectedID.length / this.COUNT_OF_ELEMENTS_ON_PAGE));
        this.page = 0;

        let maxCountOfCurrencies = selectedID.length < this.COUNT_OF_ELEMENTS_ON_PAGE ? selectedID.length : this.COUNT_OF_ELEMENTS_ON_PAGE;

        this.currentID = [];
        for(let i = 0; i < maxCountOfCurrencies; i++){
            this.currentID.push(selectedID[i]);
        }

        if( +(new Date(this.dateToCurrent)) > +(new Date(this.dateTo)) ){
            this.dateToCurrent = this.dateTo;
        }

        let output = [this.currentID,this.dateFrom,this.dateToCurrent,this.dateTo];

        this.getRates.emit(output);
    }

    GetRates(rates){
        if(this.currencies.length == 0)
            this.currencies = rates;
        else{
            for(let i = 0; i < rates.length; i++) {
                for (let j = 0; j < rates[0].length; j++) {
                    this.currencies[i].push(rates[i][j]);
                }
            }
        }
        // this.currencies = rates;
        // console.log(rates);
        // for(let i = 0; i < rates.length; i++){
        //     this.currencies[i] = [];
        //     for(let j = rates[0].length-1; j > -1; j--){
        //         this.currencies[i].push(rates[i][j]);
        //     }
        // }
        // console.log(this.currencies);
    }

    GetMoreRates(){
        let nextDay = this.addDaysToDate(this.dateToCurrent,1);
        let nextPeriod = this.addDaysToDate(this.dateToCurrent,this.DATE_PERIOD);

        if( +(new Date(nextPeriod)) > +(new Date(this.dateTo)) ){
            nextPeriod = this.dateTo;
        }

        let output = [this.currentID, nextDay, nextPeriod];

        this.dateToCurrent = nextPeriod;

        this.getRates.emit(output);
    }

    addDaysToDate(data, days){
        data = data.split('-');
        data = new Date(data[0], +data[1]-1, +data[2]+days, 0, 0, 0, 0);
        data = [data.getFullYear(),data.getMonth()+1,data.getDate()];
        data[2] = data[2] < 10 ? '0'+data[2] : data[2];
        data = data.join('-').replace(/(^|\/)(\d)(?=\/)/g,"$10$2");
        return data;
    }
}