webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.getRates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.getMoreRates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.currencies = [];
        this.dateFrom = "";
        this.dateTo = "";
        this.currentID = [];
        this.COUNT_OF_ELEMENTS_ON_PAGE = 3;
        this.DATE_PERIOD = 6;
    }
    CurrencyListComponent.prototype.ngOnInit = function () {
    };
    CurrencyListComponent.prototype.GetRatesOnPage = function (pageNumber) {
        this.page = pageNumber;
        this.currencies = [];
        this.dateToCurrent = this.addDaysToDate(this.dateFrom, this.DATE_PERIOD);
        if (+(new Date(this.dateToCurrent)) > +(new Date(this.dateTo)))
            this.dateToCurrent = this.dateTo;
        var maxSelectedCurr = (pageNumber) * this.COUNT_OF_ELEMENTS_ON_PAGE + this.COUNT_OF_ELEMENTS_ON_PAGE - 1 > this.selectedID.length - 1 ? this.selectedID.length - 1 : (pageNumber) * this.COUNT_OF_ELEMENTS_ON_PAGE + this.COUNT_OF_ELEMENTS_ON_PAGE - 1;
        this.currentID = [];
        for (var i = (pageNumber) * this.COUNT_OF_ELEMENTS_ON_PAGE; i <= maxSelectedCurr; i++) {
            this.currentID.push(this.selectedID[i]);
        }
        var output = [this.currentID, this.dateFrom, this.dateToCurrent];
        this.getRates.emit(output);
    };
    CurrencyListComponent.prototype.GetSelectedCurrencies = function (selectedID, dateFrom, dateTo) {
        this.currencies = [];
        this.selectedID = selectedID;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.dateToCurrent = this.addDaysToDate(dateFrom, this.DATE_PERIOD);
        this.pages = Array(Math.ceil(selectedID.length / this.COUNT_OF_ELEMENTS_ON_PAGE));
        this.page = 0;
        var maxCountOfCurrencies = selectedID.length < this.COUNT_OF_ELEMENTS_ON_PAGE ? selectedID.length : this.COUNT_OF_ELEMENTS_ON_PAGE;
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
        // this.currencies = rates;
        // console.log(rates);
        // for(let i = 0; i < rates.length; i++){
        //     this.currencies[i] = [];
        //     for(let j = rates[0].length-1; j > -1; j--){
        //         this.currencies[i].push(rates[i][j]);
        //     }
        // }
        // console.log(this.currencies);
    };
    CurrencyListComponent.prototype.GetMoreRates = function () {
        var nextDay = this.addDaysToDate(this.dateToCurrent, 1);
        var nextPeriod = this.addDaysToDate(this.dateToCurrent, this.DATE_PERIOD);
        if (+(new Date(nextPeriod)) > +(new Date(this.dateTo))) {
            nextPeriod = this.dateTo;
        }
        var output = [this.currentID, nextDay, nextPeriod];
        this.dateToCurrent = nextPeriod;
        this.getRates.emit(output);
    };
    CurrencyListComponent.prototype.addDaysToDate = function (data, days) {
        data = data.split('-');
        data = new Date(data[0], +data[1] - 1, +data[2] + days, 0, 0, 0, 0);
        data = [data.getFullYear(), data.getMonth() + 1, data.getDate()];
        data[2] = data[2] < 10 ? '0' + data[2] : data[2];
        data = data.join('-').replace(/(^|\/)(\d)(?=\/)/g, "$10$2");
        return data;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyListComponent.prototype, "getRates", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyListComponent.prototype, "getMoreRates", void 0);
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
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-list.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(633);
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
    CurrencyService.prototype.getCurrencyList = function () {
        return this.http.get('http://angular.f.dev/index.php?r=site%2Fget-currencies')
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    CurrencyService.prototype.getCurrenciesRateOnRange = function (cursID, dateFromStr, dateToStr) {
        var url = 'http://angular.f.dev/index.php?r=site%2Fget-currencies-rate-on-range';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers, method: 'post' });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.set('dateFrom', JSON.stringify(dateFromStr));
        data.set('dateTo', JSON.stringify(dateToStr));
        data.set('cursID', JSON.stringify(cursID));
        return this.http.post(url, data, options)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    CurrencyService.prototype.ngOnInit = function () {
        this.getCurrencyList();
    };
    CurrencyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], CurrencyService);
    return CurrencyService;
    var _a;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 350;


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(189);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]]);
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(634);
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
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_list_currency_list_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currency_form_currency_form_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__currency_counter_currency_counter_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__currency_graphics_currency_graphics_component__ = __webpack_require__(463);
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
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__ = __webpack_require__(303);
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
    CurrencyCounterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyService.getCurrencyList()
            .then(function (data) { return _this.currencyList = data; });
    };
    CurrencyCounterComponent.prototype.TestAddSelectedCurrencies = function (selectedCurr_dateFrom_dateTo) {
        var selectedCurrencies = selectedCurr_dateFrom_dateTo[0];
        var dateFrom = selectedCurr_dateFrom_dateTo[1];
        var dateTo = selectedCurr_dateFrom_dateTo[2];
        var selectedID = [];
        for (var _i = 0, selectedCurrencies_1 = selectedCurrencies; _i < selectedCurrencies_1.length; _i++) {
            var selectedCurr = selectedCurrencies_1[_i];
            selectedID.push(selectedCurr.Cur_ID);
        }
        this.listOfCurrencies.GetSelectedCurrencies(selectedID, dateFrom, dateTo);
    };
    CurrencyCounterComponent.prototype.TestGetRates = function (ID_dateFrom_dateTo) {
        var _this = this;
        var ID = ID_dateFrom_dateTo[0];
        var dateFrom = ID_dateFrom_dateTo[1];
        var dateTo = ID_dateFrom_dateTo[2];
        this.currencyService.getCurrenciesRateOnRange(ID, dateFrom, dateTo)
            .then(function (data) {
            _this.listOfCurrencies.GetRates(data);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__["a" /* CurrencyListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__["a" /* CurrencyListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__currency_list_currency_list_component__["a" /* CurrencyListComponent */]) === 'function' && _a) || Object)
    ], CurrencyCounterComponent.prototype, "listOfCurrencies", void 0);
    CurrencyCounterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-counter',
            template: __webpack_require__(628),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */]) === 'function' && _b) || Object])
    ], CurrencyCounterComponent);
    return CurrencyCounterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-counter.component.js.map

/***/ }),

/***/ 462:
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
        this.addList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.error = { msg: '', formValid: true };
        this.selectedCurrencies = [];
        this.showList = false;
    }
    CurrencyFormComponent.prototype.ngOnInit = function () { };
    CurrencyFormComponent.prototype.ToggleShowList = function () {
        this.showList = !this.showList;
    };
    CurrencyFormComponent.prototype.AddCurrency = function (currency) {
        if (this.selectedCurrencies.indexOf(currency) != -1)
            this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency), 1);
        else
            this.selectedCurrencies.push(currency);
    };
    CurrencyFormComponent.prototype.AddCurrencies = function () {
        if (this.selectedCurrencies.length == 0) {
            this.error.formValid = false;
            this.error.msg = "Выберите валюту(ы)";
            return false;
        }
        else {
            this.error.formValid = true;
            this.error.msg = '';
        }
        var dateFrom = new Date(this.currencyFirstDate);
        var dateTo = new Date(this.currencySecondDate);
        var dateNow = new Date();
        var output = [this.selectedCurrencies, this.currencyFirstDate, this.currencySecondDate];
        this.addList.emit(output);
    };
    CurrencyFormComponent.prototype.ClearSelectedCurrencies = function () {
        this.selectedCurrencies = [];
        this.currencySecondDate = '';
        this.currencyFirstDate = '';
        this.error.formValid = true;
        this.error.msg = "";
        this.showList = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], CurrencyFormComponent.prototype, "currencyList", void 0);
    __decorate([
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
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-form.component.js.map

/***/ }),

/***/ 463:
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
        this.me = this;
    }
    CurrencyGraphicsComponent.prototype.ngOnInit = function () { };
    ;
    CurrencyGraphicsComponent.prototype.ngAfterViewInit = function () {
        var opts = {
            series: [{
                    name: 'Random data',
                    data: [1, 2, 3, 4, 3, 2, 1]
                }]
        };
        if (this.chartEl && this.chartEl.nativeElement) {
            opts.chart = {
                type: 'spline',
                renderTo: this.chartEl.nativeElement
            };
            this._chart = new Highcharts.Chart(opts);
        }
    };
    CurrencyGraphicsComponent.prototype.ngOnDestroy = function () {
        this._chart.destroy();
    };
    CurrencyGraphicsComponent.prototype.addPoint = function () {
        this.me._chart['series'][0].addPoint(4);
        this.me._chart.addSeries({ name: 'Test Data', data: [4, 3, 2, 1, 2, 3, 4] });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('chart'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], CurrencyGraphicsComponent.prototype, "chartEl", void 0);
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
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-graphics.component.js.map

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
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/environment.js.map

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

module.exports = "#btnCurrency{\r\n    word-break: break-all;\r\n}"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = ":host {\r\n    width: 100%;\r\n    display:block;\r\n}\r\n:host .axis path,\r\n:host .axis line {\r\n    fill: none;\r\n    stroke: rgba(0, 0, 0, 0.2);\r\n    color: rgba(0, 0, 0, 0.2);\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n:host .axis text {\r\n    font-size: 11px;\r\n    fill: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n:host .grid .tick {\r\n    stroke: rgba(0, 0, 0, 0.1);\r\n    opacity: 0.3;\r\n}\r\n\r\n:host .grid path {\r\n    stroke-width: 0;\r\n}\r\n\r\n:host .grid .tick {\r\n    stroke: rgba(0, 0, 0, 0.1);\r\n    opacity: 0.3;\r\n}\r\n\r\n:host .grid path {\r\n    stroke-width: 0;\r\n}\r\n:host .color-label{\r\n    display: inline;\r\n}"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container\">\n    <app-currency-counter></app-currency-counter>\n</div>"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<!--<app-currency-graphics class=\"col-xs-12\"></app-currency-graphics>-->\n<app-currency-form [currencyList]=\"currencyList\" (addList)=\"TestAddSelectedCurrencies($event)\"></app-currency-form>\n<app-currency-list (getRates)=\"TestGetRates($event)\" (getMoreRates)=\"GetMoreRates($event)\"></app-currency-list>\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\">\n\n        <div class=\"form-group\" *ngIf = currencyList>\n            <div class=\"form-control\">\n                <label>Валюта:</label>\n            </div>\n\n            <button  class=\"btn btn-primary\"\n                     (click)=\"ToggleShowList()\"\n                     type=\"button\"\n            >\n                Выбрать валюты\n            </button>\n\n        </div>\n\n        <div class=\"form-group\">\n            На дату с:<input class=\"form-control\" type=\"date\"\n                            [(ngModel)]=\"currencyFirstDate\"\n                            #dateFrom=\"ngModel\"\n                            placeholder=\"yyyy-mm-dd\"\n                            required>\n            по: <input class=\"form-control\" type=\"date\"\n                       [(ngModel)]=\"currencySecondDate\"\n                       #dateTo=\"ngModel\"\n                       placeholder=\"yyyy-mm-dd\"\n                       required pattern=\"20[0-9]{2}[\\-\\.\\\\\\/][0-9]{2}[\\-\\.\\\\\\/][0-9]{2}\">\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary form-control\"\n                    [disabled]=\"dateFrom.invalid || dateTo.invalid\"\n                    (click)=\"AddCurrencies()\"\n            >\n                Получить\n            </button>\n            <button class=\"btn btn-danger\"\n                    (click)=\"ClearSelectedCurrencies()\">Сброс</button>\n        </div>\n\n</div>\n\n<div *ngIf=\"!error.formValid\"\n     class=\"alert alert-danger\"\n>\n    {{error.msg}}\n</div>\n\n<div *ngIf = \"showList\" class=\"listOfCurrencies\">\n    <div>\n        <div class=\"col-xs-2 btn btn-default\"\n                id=\"btnCurrency\"\n                *ngFor = \"let currency of currencyList\"\n                (click)=\"AddCurrency(currency)\"\n        >\n            <i class=\"glyphicon glyphicon-ok\"\n               *ngIf=\"selectedCurrencies.indexOf(currency) != -1\"\n               aria-hidden=\"true\"></i>\n            {{currency.Cur_Name}}\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div #chart></div>\r\n</div>\r\n<button (click)=\"addPoint()\">Add Point</button>"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currencies.length > 0\">\n  <table class=\"table table-striped table-hover table-responsive\">\n    <thead>\n    <tr>\n      <th align=\"center\"\n          class=\"col-xs-3\"\n      >\n        Дата:\n      </th>\n      <th *ngFor = \"let currencyOnRange of currencies\"\n          class=\"col-xs-3\"\n          align=\"center\">\n        {{currencyOnRange[0].Cur_Name}}\n      </th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let currencyDates of currencies[0]; let i = index;\">\n        <td>\n          <strong>{{currencies[0][i].Date.slice(5,10).replace('-','.')}}</strong>\n        </td>\n        <td *ngFor=\"let currencyNames of currencies; let j = index\">\n          {{currencies[j][i].Cur_OfficialRate}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <a *ngFor = \"let tpage of pages; let i = index\"\n     (click)=\"GetRatesOnPage(i)\"\n  >\n    page {{i}}\n  </a>\n  <br>\n  <a *ngIf=\"dateToCurrent != dateTo\" (click)=\"GetMoreRates()\">Show More Dates</a>\n\n</div>"

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ })

},[649]);
//# sourceMappingURL=main.bundle.map