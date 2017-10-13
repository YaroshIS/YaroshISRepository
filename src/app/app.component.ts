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

  /*private showList: boolean = false;
  private selected;

  private currencyList : { 'Cur_ID' : number, 'Cur_Name' : string, 'Cur_Abbreviation' : string, 'Cur_Scale' : number, 'Cur_OfficialRate' : number, 'Cur_Date' : any }[];



  AddAllCurrency(){
    let count = this.currencyList.length;
    for(let i = count; i > 0; i--){
      this.AddCurrency(this.currencyList[i-1]);
    }
  }

  SortCurrencyList(){
    this.currencyList.sort(function (a,b){
      if(a.Cur_Name > b.Cur_Name) return 1;
      else return -1;
    });
  }

  AddCurrencyList(currencyName){
    for(let i=0; i < currencyName.length; i++) {
      for (let currency of this.currencyList) {
        if (currencyName.item(i).value == currency.Cur_Name)
          this.AddCurrency(currency);
      }
    }
  }

  AddCurrency(item){
    this.selected.push(item);
    this.currencyList.splice(this.currencyList.indexOf(item), 1);
  }

  RemoveCurrency(item){
    this.currencyList.push(item);
    this.selected.splice(this.selected.indexOf(item),1);
    this.SortCurrencyList();
  }

  toggleShowList(){
    this.showList = !this.showList;
  }

  getCurrencyList(){

        .subscribe(res => this.currencyList = res.json());
    console.log(this.currencyList);
  }

  ngOnInit(){
    //this.currencyList = [] ;
    this.showList = false;
    this.selected = [];
    //this.getCurrencyList();*/
}
