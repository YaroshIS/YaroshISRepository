import {Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

    private _chart: any;

    public ngAfterViewInit() {
        let opts: any = {
            series: [{
                name: 'Random data',
                data: [1,2,3,4,3,2,1]
            }]
        };

        if (this.chartEl && this.chartEl.nativeElement) {
            opts.chart = {
                type: 'spline',
                renderTo: this.chartEl.nativeElement
            };

            this._chart = new Highcharts.Chart(opts);
        }
    }

    public ngOnDestroy() {
        this._chart.destroy();
    }

    me = this;
    addPoint(){
        this.me._chart['series'][0].addPoint(4) ;
        this.me._chart.addSeries({name: 'Test Data', data: [4,3,2,1,2,3,4]});

    }
}