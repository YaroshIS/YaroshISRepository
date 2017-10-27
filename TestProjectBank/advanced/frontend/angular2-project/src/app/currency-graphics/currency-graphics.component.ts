import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
    selector: 'app-currency-graphics',
    templateUrl: './currency-graphics.component.html',
    styleUrls: ['./currency-graphics.component.css']
})

export class CurrencyGraphicsComponent implements OnInit {
    ngOnInit(){};

    @ViewChild('chart') public chartEl: ElementRef;
    @Output() getRates = new EventEmitter();

    private currencies;
    private currentCurrency;
    private dates;

    private opts;

    private COUNT_OF_DATES;

    private _chart: any;

    me = this;

    constructor(){
        this.COUNT_OF_DATES = 20;

        this.currencies = [];
        this.currentCurrency = 0;

        this.opts = {
            series: [],
            xAxis : {
                type: 'datetime',
                ordinal: false
            }
        }
    }

    public ngAfterViewInit() {
        if (this.chartEl && this.chartEl.nativeElement) {
            this.opts.chart = {
                type: 'spline',
                renderTo: this.chartEl.nativeElement
            };
        }
    }

    public ngOnDestroy() {
        this._chart.destroy();
    }

    public GetSelectedCurrencies(currencies,dateFrom,dateTo){
        this.currencies = currencies;

        this.currentCurrency = 0;

        let diffDays = Math.ceil( (+(new Date(dateTo)) - +(new Date(dateFrom)) )/(1000*3600*24) );

        let dateFr = new Date(dateFrom);
        let dates = [];
        if(diffDays > this.COUNT_OF_DATES){
            let days = this.GetElementsOnRange(diffDays, this.COUNT_OF_DATES);

            for(let i = 0; i < days.length; i++){
                let date = new Date( dateFr.getFullYear(),dateFr.getMonth(),(dateFr.getDate()+days[i]),0,0,0,0 );
                dates.push( date.getFullYear() + '/' + (date.getMonth()+1) + '/'+date.getDate() );
            }
        }else{
            for(let i = 0; i <= diffDays; i++){
                let date = new Date( dateFr.getFullYear(),dateFr.getMonth(),(dateFr.getDate()+i),0,0,0,0);
                dates.push( date.getFullYear() + '/' + (date.getMonth()+1) + '/'+date.getDate() );
            }
        }

        this.dates = dates;

        let output = [ [this.currencies[this.currentCurrency]], dates];

        this.getRates.emit(output);
    }

    public GetRates(currenciesRates){
        if(this.me._chart != undefined)
            this.me._chart.destroy();
        this._chart = new Highcharts.Chart(this.opts);

        for(let currency of currenciesRates) {
            let data = [];
            for(let rate of currency){
                let date = +new Date(rate.Date) + 1000*3600*24;
                let item = [date, rate.Cur_OfficialRate];
                data.push(item);
            }

            this.me._chart.addSeries({
                name: currency[0].Cur_Name,
                data: data
            });
        }
    }

    private GetElementsOnRange(countOfElements,range){
        let outArr = [];

        let increment = (countOfElements)/(range);

        for(let i = 0; i < countOfElements-increment; i += increment){
            outArr.push(Math.ceil(i));
        }

        outArr.push(countOfElements);
        return outArr;
    }

    private NextGraphics(){
        this.currentCurrency++;
        let output = [ [this.currencies[this.currentCurrency]], this.dates];
        this.getRates.emit(output);
    }

    private PreviousGraphics(){
        this.currentCurrency--;
        let output = [ [this.currencies[this.currentCurrency]], this.dates];
        this.getRates.emit(output);
    }
}