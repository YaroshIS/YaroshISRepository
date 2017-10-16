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

    getCurrencyRateOnRange(curID,dateFromStr : string, dateToStr : string){
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currency-rate-on-range&curid='+curID+'&dateFrom='+dateFromStr+'&dateTo='+dateToStr)
            .toPromise()
            .then(response => response.json());
    }

    ngOnInit() {
        this.getCurrencyList();
    }

}
