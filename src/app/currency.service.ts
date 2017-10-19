import {Injectable, Output} from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, RequestMethod}       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {

    constructor(private http: Http) {
    }

    getCurrencyList() {
        console.log('hmhmm??');
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currencies')
            .toPromise()
            .then(response => response.json());
    }

    getCurrencyRateOnRange(curID,dateFromStr : string, dateToStr : string){
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currency-rate-on-range&curid='+curID+'&dateFrom='+dateFromStr+'&dateTo='+dateToStr)
            .toPromise()
            .then(response => response.json());
    }

    postTestRequest(){

        let url = 'http://angular.f.dev/index.php?r=site%2Fpost-request';

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Cache-Control','max-age=2592000');
        let options = new RequestOptions({ headers: headers, method: "post"});

        let data = new URLSearchParams();
        data.set('msg', JSON.stringify({msg: 'MESSAGE'}));

        return this.http.post(url,data, options).toPromise().then(response => response);
    }

    ngOnInit() {
        this.postTestRequest();
        this.getCurrencyList();
    }

}
