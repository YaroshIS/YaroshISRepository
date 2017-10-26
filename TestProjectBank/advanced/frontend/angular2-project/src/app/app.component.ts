import { Injectable }     from '@angular/core';
import { Component }      from '@angular/core';

import { Http, Response }           from '@angular/http';
import { CurrencyService}           from './currency.service';

import 'rxjs/add/operator/toPromise';

interface ICurrency {
  'Cur_ID' : number,
  'Cur_Name' : string,
  'Cur_Abbreviation' : string,
  'Cur_Scale' : number,
  'Cur_OfficialRate' : number,
  'Cur_Date' : any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {

  ngOnInit(){}
}