import {Component, OnInit, Input} from '@angular/core';

import {CurrencyService}   from './../currency.service';

@Component({
    selector: 'app-currency-list',
    templateUrl: './currency-list.component.html',
    styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
    @Input() selectedList;

    constructor(private currencyService: CurrencyService) {
    }
    
    SortSelected(sortBy) {
        switch(sortBy){
            case 'byName':{
                this.selectedList.sort(function (a, b) {
                    if (a.Cur_Name > b.Cur_Name) return 1;
                    if (a.Cur_Name < b.Cur_Name) return -1;
                });
                break;
            }
            case 'byDate':{
                this.selectedList.sort(function (a, b) {
                    if (a.Date > b.Date) return 1;
                    if (a.Date < b.Date) return -1;
                });
                break;
            }
            case 'byRate':{
                this.selectedList.sort(function (a, b) {
                    if (a.Cur_OfficialRate > b.Cur_OfficialRate) return 1;
                    if (a.Cur_OfficialRate < b.Cur_OfficialRate) return -1;
                });
                break;
            }
            case 'byAbbreviation':{
                this.selectedList.sort(function (a, b) {
                    if (a.Cur_Abbreviation > b.Cur_Abbreviation) return 1;
                    if (a.Cur_Abbreviation < b.Cur_Abbreviation) return -1;
                });
                break;
            }
        }
    }
    
    ngOnInit() {
        this.selectedList = [];
    }

}
