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
    private cursID;
    private dateFrom;
    private dateTo;

    private opts;

    private COUNT_OF_RATES;

    private _chart: any;

    constructor(){
        this.COUNT_OF_RATES = 15;

        this.currencies = [];

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

    public SendRequest(){
        let output = [this.cursID, this.dateFrom, this.dateTo, this.COUNT_OF_RATES];

        let response = this.getRates.emit(output);
    }

    public GetDates(dateFrom,dateTo){
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }

    public GetSelectedID(cursID){
        if (this.cursID != cursID) {
            this.cursID = cursID;
            return true;
        }
        return false;
    }

    public GetRates(rates){
        this._chart = new Highcharts.Chart(this.opts);

        for(let curRates of rates){
            console.log(curRates);
            let data = [];

            for(let RateOnDate of curRates){
                data.push([+new Date(RateOnDate.Date)+1000*3600*24, RateOnDate.Cur_OfficialRate]);
            }

            this._chart.addSeries({
                data: data,
                name: curRates[0].Cur_Name
            });
        }
    }
}