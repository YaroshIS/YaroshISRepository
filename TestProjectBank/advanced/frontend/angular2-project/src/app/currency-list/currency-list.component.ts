import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-currency-list',
    templateUrl: './currency-list.component.html',
    styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
    @Output() getRates = new EventEmitter(); // Переменная, позволяющая вызывать методы родительского управляющего компонента. В управляющем компоненте вызывает метод GetRates(...)

    private currencies; // Массив всех выбранных валют
    private selectedID; // Массив ID выбранных валют
    private currentID; // Массив отображаемых на данный момент ID в таблице

    private dateFrom; // Начальная дата
    private dateTo; // Конечная дата (полученная из формы)
    private dateToCurrent; // Конечная дата, которая ограничивает максимальное кол-во дат за один запрос

    private pages; // Переменная, хранящая в себе количество страниц таблицы
    private page; // Переменная, хранящая текущую страницы

    private COUNT_OF_COLUMNS; // Константа, определяющая сколько валют будет отображаться в таблице
    private DATE_PERIOD; // Константа, определяющая период кол-ва дат на один запрос.

    constructor() {
        this.currencies = [];
        this.dateFrom = "";
        this.dateTo = "";
        this.currentID = [];
        this.COUNT_OF_COLUMNS = 3; // Количество отображаемых в таблице валют
        this.DATE_PERIOD = 6; // Сколько дней нужно добавлять к текущей дате на один запрос.
    }

    ngOnInit() {
    }

    // Срабатывает при смене страницы в таблице
    // Обнуляет массив текущих отображаемых валют
    // Получает номера ID нужных валют.
    // Добавляет к текущей конечной дате ещё один период и делает запрос на переданные значения
    GetRatesOnPage(pageNumber: number) {
        this.page = pageNumber;

        this.currencies = [];

        this.dateToCurrent = this.addDaysToDate(this.dateFrom,this.DATE_PERIOD);

        if( +(new Date(this.dateToCurrent)) > +(new Date(this.dateTo)))
            this.dateToCurrent = this.dateTo;

        let maxSelectedCurr = (pageNumber)*this.COUNT_OF_COLUMNS + this.COUNT_OF_COLUMNS-1 > this.selectedID.length-1 ? this.selectedID.length-1 : (pageNumber)*this.COUNT_OF_COLUMNS + this.COUNT_OF_COLUMNS-1;

        this.currentID = [];
        for(let i = (pageNumber)*this.COUNT_OF_COLUMNS; i <= maxSelectedCurr; i++){
            this.currentID.push(this.selectedID[i]);
        }

        let output = [this.currentID, this.dateFrom, this.dateToCurrent];

        this.getRates.emit(output);
    }

    // Вызывается управляющим компонентом и принимает ID валют, выбранных в форме, а также начальную и конечную даты
    // Вычисляет количество страниц и назначает значение текущей страницы равным 0.
    // После получения данных выбирает, какие ID и на какой период будут отображаться в таблице на данный момент и отсылает данные к управляющему компоненту для получения курсов.
    GetSelectedCurrencies(selectedID,dateFrom,dateTo){
        this.currencies = [];
        this.selectedID = selectedID;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateToCurrent = this.addDaysToDate(dateFrom,this.DATE_PERIOD);

        this.pages = Array(Math.ceil(selectedID.length / this.COUNT_OF_COLUMNS));
        this.page = 0;

        let maxCountOfCurrencies = selectedID.length < this.COUNT_OF_COLUMNS ? selectedID.length : this.COUNT_OF_COLUMNS;

        this.currentID = [];
        for(let i = 0; i < maxCountOfCurrencies; i++){
            this.currentID.push(selectedID[i]);
        }

        if( +(new Date(this.dateToCurrent)) > +(new Date(this.dateTo)) ){
            this.dateToCurrent = this.dateTo;
        }

        let output = [this.currentID,this.dateFrom,this.dateToCurrent];

        this.getRates.emit(output);
    }

    // Вызывается управляющим компонентом и принимает курсы запрошенных валют на запрошенный период
    // Если в массиве отображаемых валют уже были какие-то значения (т.е. был запрос на получение курсов валют на следующий период), то значения добавляются в конец массива
    // Если массив отображаемых валют был пуст (например, при переключении страницы или первом отображении таблицы), то массив перезаписывается
    GetRates(rates){
        if(this.currencies.length == 0)
            this.currencies = rates;
        else{
            for(let i = 0; i < rates.length; i++) {
                for (let j = 0; j < rates[0].length; j++) {
                    this.currencies[i].push(rates[i][j]);
                }
            }
        }
    }

    // Срабатывает при нажатии на ссылку "Show More Dates"
    // Вычисляет, на какой период нужно взять даты и отсылает данные управляющему компоненту
    GetMoreRates(){
        let nextDay = this.addDaysToDate(this.dateToCurrent,1);
        let nextPeriod = this.addDaysToDate(this.dateToCurrent,this.DATE_PERIOD);

        if( +(new Date(nextPeriod)) > +(new Date(this.dateTo)) ){
            nextPeriod = this.dateTo;
        }

        let output = [this.currentID, nextDay, nextPeriod, this.dateTo];

        this.dateToCurrent = nextPeriod;

        this.getRates.emit(output);
    }

    // Метод, позволяющий добавить к дате data, переданной в строковом формате, прибавить days дней.
    // Возвращает дату, к которой прибавлено days дней в стороковом формате
    addDaysToDate(data, days){
        data = data.split('-');
        data = new Date(data[0], +data[1]-1, +data[2]+days, 0, 0, 0, 0);
        data = [data.getFullYear(),data.getMonth()+1,data.getDate()];
        data[2] = data[2] < 10 ? '0'+data[2] : data[2];
        data = data.join('-').replace(/(^|\/)(\d)(?=\/)/g,"$10$2");
        return data;
    }
}