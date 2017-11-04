webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_adapters_standalone_framework_src__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_adapters_standalone_framework_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_adapters_standalone_framework_src__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyGraphicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Highcharts = __webpack_require__(620);

var CurrencyGraphicsComponent = (function () {
    function CurrencyGraphicsComponent() {
        this.getRates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */](); // Переменная, позволяющая вызывать методы родительского управляющего компонента. В управляющем компоненте вызывает метод GetRatesToGraphics(...)
        this.COUNT_OF_RATES = 15; // Максимальное количество значений на графике
        this.opts = {
            series: [],
            xAxis: {
                type: 'datetime',
                ordinal: true
            },
        };
    }
    // Срабатывает после полной загрузки и отображения компонента
    CurrencyGraphicsComponent.prototype.ngAfterViewInit = function () {
        if (this.chartEl && this.chartEl.nativeElement) {
            this.opts.chart = {
                type: 'spline',
                renderTo: this.chartEl.nativeElement,
                zoomType: 'x'
            };
        }
    };
    // Срабатывает при уничтожении компонента
    CurrencyGraphicsComponent.prototype.ngOnDestroy = function () {
        this._chart.destroy();
    };
    // Отправляет запрос в управляющий компонент currency-counter и вызывает в нём метод GetRatesToGraphics.
    // Данные в запросе: 1. ID нужных валют; 2. Начальную дату; 3. Конечную дату; 4. Количество максимальных значений в графике
    CurrencyGraphicsComponent.prototype.SendRequest = function () {
        var output = [this.cursID, this.dateFrom, this.dateTo, this.COUNT_OF_RATES];
        this.getRates.emit(output);
    };
    // Вызывается в управляющем компоненте currency-counter
    // Метод, принимающий начальную и конечную даты. На этот период будет отправляться запрос к управляющему компоненту currency-counter
    CurrencyGraphicsComponent.prototype.GetDates = function (dateFrom, dateTo) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    };
    // Вызывается в управляющем компоненте currency-counter
    // Метод, принимающий ID валют, которые необходимо отобразить на графике.
    CurrencyGraphicsComponent.prototype.GetSelectedID = function (cursID) {
        if (this.cursID != cursID) {
            this.cursID = cursID;
            return true;
        }
        return false;
    };
    // Вызывается в управляющем компоненте currency-counter
    // Метод, принимающий курсы запрошенных валют на запрошенный период времени
    CurrencyGraphicsComponent.prototype.GetRates = function (rates) {
        this._chart = new Highcharts.Chart(this.opts);
        for (var _i = 0, rates_1 = rates; _i < rates_1.length; _i++) {
            var curRates = rates_1[_i];
            var data = [];
            for (var _a = 0, curRates_1 = curRates; _a < curRates_1.length; _a++) {
                var RateOnDate = curRates_1[_a];
                data.push([+new Date(RateOnDate.Date) + 1000 * 3600 * 24, RateOnDate.Cur_OfficialRate]);
            }
            this._chart.addSeries({
                data: data,
                name: curRates[0].Cur_Name,
            });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('chart'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], CurrencyGraphicsComponent.prototype, "chartEl", void 0);
    __decorate([
        // Переменная, необходимая для работы с элементом графика
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyGraphicsComponent.prototype, "getRates", void 0);
    CurrencyGraphicsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-graphics',
            template: __webpack_require__(630),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyGraphicsComponent);
    return CurrencyGraphicsComponent;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/currency-graphics.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyListComponent = (function () {
    function CurrencyListComponent() {
        this.getRates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */](); // Переменная, позволяющая вызывать методы родительского управляющего компонента. В управляющем компоненте вызывает метод GetRates(...)
        this.currencies = [];
        this.dateFrom = "";
        this.dateTo = "";
        this.currentID = [];
        this.COUNT_OF_COLUMNS = 3; // Количество отображаемых в таблице валют
        this.DATE_PERIOD = 10; // Сколько дней нужно добавлять к текущей дате на один запрос.
    }
    // Срабатывает при смене страницы в таблице
    // Обнуляет массив текущих отображаемых валют
    // Получает номера ID нужных валют.
    // Добавляет к текущей конечной дате ещё один период и делает запрос на переданные значения
    CurrencyListComponent.prototype.GetRatesOnPage = function (pageNumber) {
        if (pageNumber == this.page)
            return;
        this.page = pageNumber;
        this.currencies = [];
        this.dateToCurrent = this.addDaysToDate(this.dateFrom, this.DATE_PERIOD);
        if (+(new Date(this.dateToCurrent)) > +(new Date(this.dateTo)))
            this.dateToCurrent = this.dateTo;
        this.currentID = this.GetIDsOnPage(pageNumber);
        var output = [this.currentID, this.dateFrom, this.dateToCurrent];
        this.getRates.emit(output);
    };
    // Вызывается управляющим компонентом и принимает ID валют, выбранных в форме, а также начальную и конечную даты
    // Вычисляет количество страниц и назначает значение текущей страницы равным 0.
    // После получения данных выбирает, какие ID и на какой период будут отображаться в таблице на данный момент и отсылает данные к управляющему компоненту для получения курсов.
    CurrencyListComponent.prototype.GetSelectedCurrencies = function (selectedID, dateFrom, dateTo) {
        this.currencies = [];
        this.selectedID = selectedID;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateToCurrent = this.addDaysToDate(dateFrom, this.DATE_PERIOD);
        this.pages = Array(Math.ceil(selectedID.length / this.COUNT_OF_COLUMNS));
        this.page = 0;
        var maxCountOfCurrencies = selectedID.length < this.COUNT_OF_COLUMNS ? selectedID.length : this.COUNT_OF_COLUMNS;
        this.currentID = [];
        for (var i = 0; i < maxCountOfCurrencies; i++) {
            this.currentID.push(selectedID[i]);
        }
        if (+(new Date(this.dateToCurrent)) > +(new Date(this.dateTo))) {
            this.dateToCurrent = this.dateTo;
        }
        var output = [this.currentID, this.dateFrom, this.dateToCurrent];
        this.getRates.emit(output);
    };
    // Вызывается управляющим компонентом и принимает курсы запрошенных валют на запрошенный период
    // Если в массиве отображаемых валют уже были какие-то значения (т.е. был запрос на получение курсов валют на следующий период), то значения добавляются в конец массива
    // Если массив отображаемых валют был пуст (например, при переключении страницы или первом отображении таблицы), то массив перезаписывается
    CurrencyListComponent.prototype.GetRates = function (rates) {
        if (this.currencies.length == 0)
            this.currencies = rates;
        else {
            for (var i = 0; i < rates.length; i++) {
                for (var j = 0; j < rates[0].length; j++) {
                    this.currencies[i].push(rates[i][j]);
                }
            }
        }
    };
    // Срабатывает при нажатии на ссылку "Show More Dates"
    // Вычисляет, на какой период нужно взять даты и отсылает данные управляющему компоненту
    CurrencyListComponent.prototype.GetMoreRates = function () {
        var nextDay = this.addDaysToDate(this.dateToCurrent, 1);
        var nextPeriod = this.addDaysToDate(this.dateToCurrent, this.DATE_PERIOD);
        if (+(new Date(nextPeriod)) > +(new Date(this.dateTo))) {
            nextPeriod = this.dateTo;
        }
        var output = [this.currentID, nextDay, nextPeriod, this.dateTo];
        this.dateToCurrent = nextPeriod;
        this.getRates.emit(output);
    };
    // Метод, позволяющий добавить к дате data, переданной в строковом формате, прибавить days дней.
    // Возвращает дату, к которой прибавлено days дней в стороковом формате
    CurrencyListComponent.prototype.addDaysToDate = function (data, days) {
        data = data.split('-');
        data = new Date(data[0], +data[1] - 1, +data[2] + days, 0, 0, 0, 0);
        data = [data.getFullYear(), data.getMonth() + 1, data.getDate()];
        data[2] = data[2] < 10 ? '0' + data[2] : data[2];
        data = data.join('-').replace(/(^|\/)(\d)(?=\/)/g, "$10$2");
        return data;
    };
    // Получает ID валют, которые отображаются на текущей странице таблицы
    CurrencyListComponent.prototype.GetIDsOnPage = function (pageNumber) {
        var startIndex = (pageNumber) * this.COUNT_OF_COLUMNS;
        var IDs = this.selectedID.slice(startIndex, startIndex + this.COUNT_OF_COLUMNS);
        return IDs;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyListComponent.prototype, "getRates", void 0);
    CurrencyListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-list',
            template: __webpack_require__(631),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyListComponent);
    return CurrencyListComponent;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/currency-list.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
    }
    // GET Запрос на получение всех доступных для выбора валют
    CurrencyService.prototype.getCurrencyList = function () {
        return this.http.get('http://angular.f.dev/api/get-currencies')
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    // POST запрос на получение курсов валют на период с dateFrom по dateTo по переданным ID валют cursID
    CurrencyService.prototype.getCurrenciesRateOnRange = function (cursID, dateFrom, dateTo) {
        var url = 'http://angular.f.dev/api/get-currencies-rate-on-range';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers, method: 'post' });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.set('dateFrom', JSON.stringify(dateFrom));
        data.set('dateTo', JSON.stringify(dateTo));
        data.set('cursID', JSON.stringify(cursID));
        return this.http.post(url, data, options)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    // POST запрос на получение определенного количества (countOfRates) курсов валют с IDшниками cursId на период с dateFrom по dateTo
    CurrencyService.prototype.getCurrenciesRatesOnDates = function (cursID, dateFrom, dateTo, countOfRates) {
        var url = 'http://angular.f.dev/api/get-currencies-rate-on-dates';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers, method: 'post' });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.set('cursID', JSON.stringify(cursID));
        data.set('dateFrom', JSON.stringify(dateFrom));
        data.set('dateTo', JSON.stringify((dateTo)));
        data.set('countOfRates', JSON.stringify(countOfRates));
        return this.http.post(url, data, options)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    CurrencyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], CurrencyService);
    return CurrencyService;
    var _a;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/currency.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 351;


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(191);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]]);
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(627),
            styles: [__webpack_require__(622)],
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_list_currency_list_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currency_form_currency_form_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__currency_counter_currency_counter_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__currency_graphics_currency_graphics_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__currency_list_currency_list_component__["a" /* CurrencyListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__currency_form_currency_form_component__["a" /* CurrencyFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__currency_counter_currency_counter_component__["a" /* CurrencyCounterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__currency_graphics_currency_graphics_component__["a" /* CurrencyGraphicsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__currency_service__["a" /* CurrencyService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/app.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__currency_graphics_currency_graphics_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyCounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyCounterComponent = (function () {
    function CurrencyCounterComponent(currencyService) {
        this.currencyService = currencyService;
    }
    // Срабатывает при инициализации компонента.
    // Делает запрос на получение всех доступных валют и в виде массива передаёт их компоненту currency-form
    CurrencyCounterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyService.getCurrencyList()
            .then(function (data) { return _this.currencyList = data; });
    };
    // Срабатывает при нажатии на кнопку "Получить"
    // Принимает выделенные валюты и даты от компонента формы.
    // Отправляет компоненту графика начальную и конечные даты
    // Отправляет ID выбранных валют, начальную и конечные даты в компонент таблицы.
    CurrencyCounterComponent.prototype.GetSelectedCurrencies = function (selectedCurr_dateFrom_dateTo) {
        var selectedCurrencies = selectedCurr_dateFrom_dateTo[0];
        var dateFrom = selectedCurr_dateFrom_dateTo[1];
        var dateTo = selectedCurr_dateFrom_dateTo[2];
        var selectedID = [];
        for (var _i = 0, selectedCurrencies_1 = selectedCurrencies; _i < selectedCurrencies_1.length; _i++) {
            var selectedCurr = selectedCurrencies_1[_i];
            selectedID.push(selectedCurr.Cur_ID);
        }
        this.graphicsComponent.GetDates(dateFrom, dateTo);
        this.listComponent.GetSelectedCurrencies(selectedID, dateFrom, dateTo);
    };
    // Срабатывает, когда компонент currency-list делает запрос на получение курсов определенных валют на период времени
    // Такие запросы возникают либо при переключении страницы в таблице, либо при нажатии на кнопку "Show More Dates"
    // Принимает ID валют и период времени, которые нужны на данный момент в таблицу.
    // При переключении страницы в графике валюты также должны меняться, поэтому метод отсылает данные ещё и графику (при условии, что мы переключаем страницу)
    // Отсылает запрос к сервису на получение нужных курсов валют и передаёт их обратно компоненту currency-list.
    CurrencyCounterComponent.prototype.GetRates = function (ID_dateFrom_dateToCurrent) {
        var _this = this;
        var ID = ID_dateFrom_dateToCurrent[0];
        var dateFrom = ID_dateFrom_dateToCurrent[1];
        var dateToCurrent = ID_dateFrom_dateToCurrent[2];
        if (this.graphicsComponent.GetSelectedID(ID)) {
            this.graphicsComponent.SendRequest();
        }
        this.currencyService.getCurrenciesRateOnRange(ID, dateFrom, dateToCurrent)
            .then(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var currencyOnRange = data_1[_i];
                currencyOnRange[0].Cur_Name = _this.CurIDtoName(currencyOnRange[0].Cur_ID);
            }
            _this.listComponent.GetRates(data);
        });
    };
    // Срабатывает, когда компонент currency-graphics делает запрос на получение курсов валют с начального по конечный период времени.
    // Валюты будут соответсвовать тем, что отображаются на данный момент в таблице.
    // В качестве аргументов здесь выступают 1. ID нужных валют; 2. Начальная дата; 3. Конечная дата; 4. Количество дат (т.к. в графике отображается ограниченное кол-во значений)
    // Отсылает запрос к сервису и возвращает результат в компонент currency-graphics
    CurrencyCounterComponent.prototype.GetRatesToGraphics = function (ID_dates) {
        var _this = this;
        var ID = ID_dates[0];
        var dateFrom = ID_dates[1];
        var dateTo = ID_dates[2];
        var countOfRates = ID_dates[3];
        this.currencyService.getCurrenciesRatesOnDates(ID, dateFrom, dateTo, countOfRates)
            .then(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var currencyOnRange = response_1[_i];
                currencyOnRange[0].Cur_Name = _this.CurIDtoName(currencyOnRange[0].Cur_ID);
            }
            _this.graphicsComponent.GetRates(response);
        });
    };
    // Метод для получения ID валюты по её имени
    CurrencyCounterComponent.prototype.CurIDtoName = function (curID) {
        for (var _i = 0, _a = this.currencyList; _i < _a.length; _i++) {
            var currency = _a[_i];
            if (currency.Cur_ID == curID)
                return currency.Cur_Name;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__["a" /* CurrencyListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__["a" /* CurrencyListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__["a" /* CurrencyListComponent */]) === 'function' && _a) || Object)
    ], CurrencyCounterComponent.prototype, "listComponent", void 0);
    __decorate([
        // переменная, позволяющая использовать методы компонента currency-list (Таблицы)
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__currency_graphics_currency_graphics_component__["a" /* CurrencyGraphicsComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__currency_graphics_currency_graphics_component__["a" /* CurrencyGraphicsComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__currency_graphics_currency_graphics_component__["a" /* CurrencyGraphicsComponent */]) === 'function' && _b) || Object)
    ], CurrencyCounterComponent.prototype, "graphicsComponent", void 0);
    CurrencyCounterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-counter',
            template: __webpack_require__(628),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */]) === 'function' && _c) || Object])
    ], CurrencyCounterComponent);
    return CurrencyCounterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/currency-counter.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyFormComponent = (function () {
    function CurrencyFormComponent() {
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */](); // Переменная, с помощью которой можно передать список выбранных валют управляющему компоненту currency-counter.
        this.error = { msg: '', formValid: true }; // Ошибки нет, форма валидна
        this.selectedCurrencies = [];
        this.showList = false;
    }
    // Метод, переключающий отображение списка доступных валют
    CurrencyFormComponent.prototype.ToggleShowList = function () {
        this.showList = !this.showList;
    };
    // Метод, добавляющий валюту, по которой кликнули, в массив выбранных валют (при наличии этой валюты в массиве, она удаляется из массива выбранных валют)
    CurrencyFormComponent.prototype.AddCurrency = function (currency) {
        if (this.selectedCurrencies.indexOf(currency) != -1)
            this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency), 1);
        else
            this.selectedCurrencies.push(currency);
    };
    // Срабатывает при нажатии на кнопку "Получить"
    // Проверяет, правильно ли введены данные. В случае ошибки показывает ошибку и прекращает своё выполнение
    // Если данные корректны - отправляет их управляющему компоненту.
    CurrencyFormComponent.prototype.SendCurrencies = function () {
        if (this.selectedCurrencies.length == 0) {
            this.ShowError('Выберите валюту');
            return false;
        }
        if (!this.CheckDates(this.currencyFirstDate, this.currencySecondDate)) {
            this.ShowError('Выберите корректный промежуток времени');
            return false;
        }
        this.error.formValid = true;
        this.error.msg = '';
        if (this.showList)
            this.showList = false;
        var output = [this.selectedCurrencies, this.currencyFirstDate, this.currencySecondDate];
        this.addList.emit(output);
    };
    // Срабатывает при нажатии на кнопку "Сброс"
    // Очищает форму.
    CurrencyFormComponent.prototype.ClearSelectedCurrencies = function () {
        this.selectedCurrencies = [];
        this.currencySecondDate = '';
        this.currencyFirstDate = '';
        this.error.formValid = true;
        this.error.msg = "";
        this.showList = false;
    };
    // Проверка введенных дат
    CurrencyFormComponent.prototype.CheckDates = function (date1, date2) {
        var dateFrom = new Date(date1);
        var dateTo = new Date(date2);
        var dateNow = new Date();
        if (dateFrom.toString() == 'Invalid Date' ||
            dateTo.toString() == 'Invalid Date' ||
            +dateFrom > +dateTo ||
            +dateFrom > +dateNow ||
            +dateTo > +dateNow) {
            return false;
        }
        return true;
    };
    // Метод, выводящий ошибку в сообщением msg
    CurrencyFormComponent.prototype.ShowError = function (msg) {
        this.error.formValid = false;
        this.error.msg = msg;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CurrencyFormComponent.prototype, "currencyList", void 0);
    __decorate([
        // Переменная, хранящая список доступных валют
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyFormComponent.prototype, "addList", void 0);
    CurrencyFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-form',
            template: __webpack_require__(629),
            styles: [__webpack_require__(624)],
        }), 
        __metadata('design:paramtypes', [])
    ], CurrencyFormComponent);
    return CurrencyFormComponent;
}());
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/currency-form.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projects/GIT/YaroshISRepository/TestProjectBank/advanced/frontend/my-app/src/environment.js.map

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = ".col-xs-4, .col-xs-8, .col-xs-12{\r\n    height: 40em;\r\n}\r\n\r\n.table-hover th:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.table-body tr:hover{\r\n    cursor:default;\r\n}\r\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "#my-drop-down-menu ul, ul#my-drop-down-menu{\r\n    list-style:none;\r\n}\r\n\r\n#my-drop-down-menu{\r\n    position:relative; /* (!) */\r\n    z-index:3;\r\n    width:200px;\r\n    height:20px;\r\n}\r\n\r\n#my-drop-down-menu li:hover{\r\n    background: #97e9eb;\r\n    border: 4px double black\r\n}\r\n\r\n#my-drop-down-menu li{\r\n    background: aliceblue;\r\n}\r\n\r\n#myBtn{\r\n    width: 200px;\r\n}\r\n\r\nli.link{\r\n    list-style: none;\r\n    width: 200px;\r\n}"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display:block;\r\n}\r\n:host .axis path,\r\n:host .axis line {\r\n    fill: none;\r\n    stroke: rgba(0, 0, 0, 0.2);\r\n    color: rgba(0, 0, 0, 0.2);\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n:host .axis text {\r\n    font-size: 11px;\r\n    fill: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n:host .grid .tick {\r\n    stroke: rgba(0, 0, 0, 0.1);\r\n    opacity: 0.3;\r\n}\r\n\r\n:host .grid path {\r\n    stroke-width: 0;\r\n}\r\n\r\n:host .grid .tick {\r\n    stroke: rgba(0, 0, 0, 0.1);\r\n    opacity: 0.3;\r\n}\r\n\r\n:host .grid path {\r\n    stroke-width: 0;\r\n}\r\n:host .color-label{\r\n    display: inline;\r\n}"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = ".table {\r\n    margin-bottom: 0;\r\n}"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container\">\n    <app-currency-counter></app-currency-counter>\n</div>"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<app-currency-form [currencyList]=\"currencyList\"\n                   (addList)=\"GetSelectedCurrencies($event)\"\n                   class=\"col-xs-12\"\n                   align=\"center\">\n</app-currency-form>\n\n<div style=\"height : 400px;\">\n    <app-currency-graphics (getRates)=\"GetRatesToGraphics($event)\"\n                           class=\"col-xs-6\">\n    </app-currency-graphics>\n\n    <app-currency-list (getRates)=\"GetRates($event)\"\n                       class=\"col-xs-6\">\n    </app-currency-list>\n</div>"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\">\n\n        <div class=\"form-group\" *ngIf = currencyList align=\"center\">\n            <div class=\"btn btn-primary\"\n                 id=\"myBtn\"\n                 (click)=\"ToggleShowList()\"\n                 type=\"button\">\n                Выбрать валюты\n                <b class=\"caret\"></b>\n            </div>\n            <div id=\"my-drop-down-menu\"\n                class=\"list\"\n                *ngIf=\"showList\">\n                <li *ngFor = \"let currency of currencyList\"\n                    class=\"link\"\n                    (click)=\"AddCurrency(currency)\">\n                    <i class=\"glyphicon glyphicon-ok\"\n                       *ngIf=\"selectedCurrencies.indexOf(currency) != -1\"\n                       aria-hidden=\"true\"></i>\n                    {{currency.Cur_Name}}\n                </li>\n            </div>\n        </div>\n\n        <div class=\"form-group\" id=\"my-date-from\">\n            На дату с:<input class=\"form-control\" type=\"date\"\n                            [(ngModel)]=\"currencyFirstDate\"\n                            #dateFrom=\"ngModel\"\n                            placeholder=\"yyyy-mm-dd\"\n                            required pattern=\"20[0-9]{2}[\\-\\.\\\\\\/][0-1][0-9][\\-\\.\\\\\\/][0-3][0-9]\">\n            по: <input class=\"form-control\" type=\"date\"\n                       [(ngModel)]=\"currencySecondDate\"\n                       #dateTo=\"ngModel\"\n                       placeholder=\"yyyy-mm-dd\"\n                       required pattern=\"20[0-9]{2}[\\-\\.\\\\\\/][0-1][0-9][\\-\\.\\\\\\/][0-3][0-9]\">\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary form-control\"\n                    [disabled]=\"dateFrom.invalid || dateTo.invalid\"\n                    (click)=\"SendCurrencies()\">\n                Получить\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"ClearSelectedCurrencies()\">Сброс</button>\n        </div>\n</div>\n\n<div *ngIf=\"!error.formValid\"\n     class=\"alert alert-danger\">\n    {{error.msg}}\n</div>"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div #chart></div>\r\n</div>"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currencies.length > 0\">\n  <a *ngFor = \"let tpage of pages; let i = index\"\n     (click)=\"GetRatesOnPage(i)\">\n  <i class=\"glyphicon glyphicon-hand-right\"\n     *ngIf=\"page == i\"\n     aria-hidden=\"true\"></i>\n    <span>page {{i+1}}</span>\n  </a>\n  <div style=\"overflow: auto; height:350px\">\n  <table class=\"table table-striped table-hover table-responsive col-xs-12\">\n    <thead>\n    <tr>\n      <th align=\"center\"\n          class=\"col-xs-3\">\n        Дата:\n      </th>\n      <th *ngFor = \"let currencyOnRange of currencies\"\n          class=\"col-xs-3\"\n          align=\"center\">\n        {{currencyOnRange[0].Cur_Name}}\n      </th>\n    </tr>\n    </thead>\n  </table>\n\n    <table class=\"table table-striped table-hover table-responsive col-xs-12\">\n      <tbody>\n        <tr *ngFor=\"let currencyDates of currencies[0]; let i = index;\">\n          <td>\n            <strong>{{currencies[0][i].Date.slice(5,10).replace('-','.')}}</strong>\n          </td>\n          <td *ngFor=\"let currencyNames of currencies; let j = index\">\n            {{currencies[j][i].Cur_OfficialRate}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <a *ngIf=\"dateToCurrent != dateTo\" (click)=\"GetMoreRates()\">\n      <i class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></i>\n      Show More Dates</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ })

},[656]);
//# sourceMappingURL=main.bundle.map