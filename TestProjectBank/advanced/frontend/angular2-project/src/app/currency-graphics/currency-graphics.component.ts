import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { CurrencyService } from '../currency.service'

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
    selector: 'app-currency-graphics',
    templateUrl: './currency-graphics.component.html',
    styleUrls: ['./currency-graphics.component.css']
})

export class CurrencyGraphicsComponent {
    @ViewChild('chart') public chartEl:ElementRef; // Переменная, необходимая для работы с элементом графика

    private opts; // Настройки для графика

    private pages; // Переменная, отвечающая за количество страниц в графике

    private _chart:any; // Переменная для работы с графиком

    constructor(private currencyService:CurrencyService) {
        this.opts = { // Задаём начальные настройик графика
            series: [],
            xAxis: {
                type: 'datetime',
                ordinal: true
            },
        };

        // Подписка на изменение количества страниц
        this.currencyService.updatePages.subscribe(data => {
            this.pages = Array(data);
        });

        // Подписка на изменение курсов текущих валют
        this.currencyService.updateRates.subscribe(data => {
            this.GetRates(data);
        })
    }

    // Срабатывает после полной загрузки и отображения компонента
    public ngAfterViewInit() {
        if (this.chartEl && this.chartEl.nativeElement) {
            this.opts.chart = {
                type: 'spline',
                renderTo: this.chartEl.nativeElement,
                zoomType: 'x'
            };
        }
    }

    // Срабатывает при уничтожении компонента
    public ngOnDestroy() {
        this._chart.destroy();
    }

    // Метод, принимающий курсы запрошенных валют.
    // Выводит значения на экран в виде графика
    public GetRates(rates) {
        this._chart = new Highcharts.Chart(this.opts);

        for (let curRates of rates) {
            let data = [];

            for (let RateOnDate of curRates) {
                data.push([+new Date(RateOnDate.Date) + 1000 * 3600 * 24, RateOnDate.Cur_OfficialRate]);
            }

            this._chart.addSeries({
                data: data,
                name: curRates[0].Cur_Name,

            });
        }
    }

    // Метод, срабатывающий при смене страницы
    GetRatesOnPage(pageNumber:number) {
        this.currencyService.GetRatesOnPage(pageNumber);
    }
}