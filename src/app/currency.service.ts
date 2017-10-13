import {Injectable, Output} from '@angular/core';
import {Http, RequestOptions, Headers}       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {

    constructor(private http: Http) {
    }

    getCurrencyList() {
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fhello')
            .map(res => res.json());
    }

    getCurrencyRate(curId,date){
        console.log('http://www.nbrb.by/API/ExRates/Rates/'+curId+'?onDate='+date);
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/'+curId+'?onDate='+date)
            .map(res => res.json());
    }

    ngOnInit() {
        this.getCurrencyList();
    }

}
