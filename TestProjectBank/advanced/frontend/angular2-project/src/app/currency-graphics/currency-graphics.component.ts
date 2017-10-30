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

    @ViewChild('chart') public chartEl: ElementRef; // Переменная, необходимая для работы с элементом графика
    @Output() getRates = new EventEmitter(); // Переменная, позволяющая вызывать методы родительского управляющего компонента. В управляющем компоненте вызывает метод GetRatesToGraphics(...)

    private cursID; // Массив ID отображаемых в данный момент валют
    private dateFrom; // Начальная дата
    private dateTo; // Конечная дата

    private opts; // Настройки для графика

    private COUNT_OF_RATES; // Максимальное количество значений на графике(передаётся php-серверу, который обрабатывает получение нужного количества значений)

    private _chart: any; // Переменная для работы с графиком

    constructor(){
        this.COUNT_OF_RATES = 15; // Максимальное количество значений на графике

        this.opts = { // Задаём начальные настройик графика
            series: [],
            xAxis : {
                type: 'datetime',
                ordinal: true
            }
        }
    }

    // Срабатывает после полной загрузки и отображения компонента
    public ngAfterViewInit() {
        if (this.chartEl && this.chartEl.nativeElement) {
            this.opts.chart = {
                type: 'spline',
                renderTo: this.chartEl.nativeElement
            };
        }
    }

    // Срабатывает при уничтожении компонента
    public ngOnDestroy() {
        this._chart.destroy();
    }

    // Отправляет запрос в управляющий компонент currency-counter и вызывает в нём метод GetRatesToGraphics.
    // Данные в запросе: 1. ID нужных валют; 2. Начальную дату; 3. Конечную дату; 4. Количество максимальных значений в графике
    public SendRequest(){
        let output = [this.cursID, this.dateFrom, this.dateTo, this.COUNT_OF_RATES];

        this.getRates.emit(output);
    }

    // Вызывается в управляющем компоненте currency-counter
    // Метод, принимающий начальную и конечную даты. На этот период будет отправляться запрос к управляющему компоненту currency-counter
    public GetDates(dateFrom,dateTo){
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }

    // Вызывается в управляющем компоненте currency-counter
    // Метод, принимающий ID валют, которые необходимо отобразить на графике.
    public GetSelectedID(cursID){
        if (this.cursID != cursID) {
            this.cursID = cursID;
            return true;
        }
        return false;
    }

    // Вызывается в управляющем компоненте currency-counter
    // Метод, принимающий курсы запрошенных валют на запрошенный период времени
    public GetRates(rates){
        this._chart = new Highcharts.Chart(this.opts);

        for(let curRates of rates){
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