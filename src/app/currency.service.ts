import {Injectable, Output} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, RequestMethod}       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {


    constructor(private http: Http) {
    }

    getCurrencyList() {
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fhello')
            .toPromise()
            .then(response => response.json());
    }

    getCurrencyRate(curId,date){
        console.log('http://www.nbrb.by/API/ExRates/Rates/'+curId+'?onDate='+date);
        return this.http.get('http://www.nbrb.by/API/ExRates/Rates/'+curId+'?onDate='+date)
            .map(res => res.json());
    }

    getCurrencyRateOnRange(curID,dateFromStr : string, dateToStr : string){
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currency-rate-on-range&curid='+curID+'&dateFrom='+dateFromStr+'&dateTo='+dateToStr)
            .toPromise()
            .then(response => response.json());
    }

    ngOnInit() {
        this.getCurrencyList();
    }

}
