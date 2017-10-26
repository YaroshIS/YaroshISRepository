import {Injectable, Output} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, RequestMethod}       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {

    constructor(private http: Http) {
    }

    getCurrencyList() {
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currencies')
            .toPromise()
            .then(response => response.json());
    }

    getCurrenciesRateOnRange(cursID, dateFromStr : string, dateToStr: string){
        let url = 'http://angular.f.dev/index.php?r=site%2Fget-currencies-rate-on-range';

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions({ headers: headers, method: 'post'});

        let data = new URLSearchParams();
        data.set('dateFrom', JSON.stringify(dateFromStr));
        data.set('dateTo', JSON.stringify(dateToStr));
        data.set('cursID', JSON.stringify(cursID));

        return this.http.post(url,data,options)
            .toPromise()
            .then(response => response.json());
    }

    ngOnInit() {
        this.getCurrencyList();
    }

}