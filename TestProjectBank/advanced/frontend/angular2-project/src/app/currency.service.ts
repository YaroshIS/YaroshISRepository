import {Injectable, Output} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, RequestMethod}       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {

    constructor(private http: Http) {
    }

    // GET Запрос на получение всех доступных для выбора валют
    getCurrencyList() {
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currencies')
            .toPromise()
            .then(response => response.json());
    }

    // POST запрос на получение курсов валют на период с dateFrom по dateTo по переданным ID валют cursID
    getCurrenciesRateOnRange(cursID, dateFrom : string, dateTo: string){
        let url = 'http://angular.f.dev/index.php?r=site%2Fget-currencies-rate-on-range';

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions({ headers: headers, method: 'post'});

        let data = new URLSearchParams();
        data.set('dateFrom', JSON.stringify(dateFrom));
        data.set('dateTo', JSON.stringify(dateTo));
        data.set('cursID', JSON.stringify(cursID));

        return this.http.post(url,data,options)
            .toPromise()
            .then(response => response.json());
    }

    // POST запрос на получение определенного количества (countOfRates) курсов валют с IDшниками cursId на период с dateFrom по dateTo
    getCurrenciesRatesOnDates(cursID, dateFrom : string, dateTo : string, countOfRates){
        let url = 'http://angular.f.dev/index.php?r=site%2Fget-currencies-rate-on-dates';

        let headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');

        let options = new RequestOptions({ headers: headers, method: 'post'});

        let data = new URLSearchParams();
        data.set('cursID', JSON.stringify(cursID));
        data.set('dateFrom', JSON.stringify(dateFrom));
        data.set('dateTo', JSON.stringify((dateTo)));
        data.set('countOfRates', JSON.stringify(countOfRates));

        return this.http.post(url,data,options)
            .toPromise()
            .then(response => response.json());
    }
}