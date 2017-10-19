import { Component, OnInit, Input } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";


@Component({
  selector: 'app-currency-graphics',
  templateUrl: './currency-graphics.component.html',
  styleUrls: ['./currency-graphics.component.css']
})
export class CurrencyGraphicsComponent implements OnInit {
    @Input() currenciesRates
    ngOnInit() {
    }
}
