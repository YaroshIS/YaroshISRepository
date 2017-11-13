webpackJsonp([1,4],{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(192);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
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
    function AppComponent(currencyService) {
        var _this = this;
        this.currencyService = currencyService;
        this.viewTable = false;
        this.viewChart = false;
        this.currencyService.updatePermissions.subscribe(function (data) {
            if (data.indexOf('viewTable') != -1) {
                _this.viewTable = true;
            }
            if (data.indexOf('viewChart') != -1) {
                _this.viewChart = true;
            }
        });
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(626),
            styles: [__webpack_require__(622)],
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__currency_list_currency_list_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currency_form_currency_form_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__currency_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__currency_graphics_currency_graphics_component__ = __webpack_require__(462);
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
                __WEBPACK_IMPORTED_MODULE_8__currency_graphics_currency_graphics_component__["a" /* CurrencyGraphicsComponent */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_service__ = __webpack_require__(96);
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
    function CurrencyFormComponent(currencyService) {
        this.currencyService = currencyService;
        this.selectedCurrencies = []; // Массив, хранящий выбранные валюты
        this.showList = false; // Переменная, контролирующая отображение списка доступных для выбора валют
        this.error = { msg: '', formValid: true }; // Объект, отвечающий за наличие и содержание ошибки при неправильно введенных данных
        this.ClearSelectedCurrencies();
    }
    CurrencyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyService.getCurrencyList()
            .subscribe(function (data) {
            _this.currencyList = data.json();
        });
    };
    // Метод, переключающий отображение списка доступных валют
    CurrencyFormComponent.prototype.ToggleShowList = function () {
        this.showList = !this.showList;
    };
    // Метод, добавляющий валюту, по которой кликнули, в массив выбранных валют (при наличии этой валюты в массиве, она удаляется из массива выбранных валют)
    CurrencyFormComponent.prototype.AddCurrency = function (currency) {
        if (this.selectedCurrencies.indexOf(currency) != -1) {
            this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency), 1);
        }
        else {
            this.selectedCurrencies.push(currency);
        }
    };
    // Срабатывает при нажатии на кнопку "Получить"
    // Проверяет, правильно ли введены данные. В случае ошибки показывает ошибку и прекращает своё выполнение
    // Если данные корректны - отправляет их в сервис.
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
        if (this.showList) {
            this.showList = false;
        }
        var IDs = [];
        for (var _i = 0, _a = this.selectedCurrencies; _i < _a.length; _i++) {
            var ID = _a[_i];
            IDs.push(ID.Cur_ID);
        }
        this.currencyService.getSelectedCurrencies(this.selectedCurrencies, this.currencyFirstDate, this.currencySecondDate);
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
        if (dateFrom.toString() === 'Invalid Date' ||
            dateTo.toString() === 'Invalid Date' ||
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
    CurrencyFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-form',
            template: __webpack_require__(627),
            styles: [__webpack_require__(623)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */]) === 'function' && _a) || Object])
    ], CurrencyFormComponent);
    return CurrencyFormComponent;
    var _a;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-form.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_adapters_standalone_framework_src__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_adapters_standalone_framework_src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_adapters_standalone_framework_src__);
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
    function CurrencyGraphicsComponent(currencyService) {
        var _this = this;
        this.currencyService = currencyService;
        this.opts = {
            series: [],
            xAxis: {
                type: 'datetime',
                ordinal: true
            },
        };
        // Подписка на изменение количества страниц
        this.currencyService.updateChartPages.subscribe(function (data) {
            _this.pages = Array(data);
            _this.page = 0;
        });
        // Подписка на изменение курсов текущих валют
        this.currencyService.updateChartRates.subscribe(function (data) {
            _this.GetRates(data);
        });
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
    // Метод, принимающий курсы запрошенных валют.
    // Выводит значения на экран в виде графика
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
    // Метод, срабатывающий при смене страницы
    CurrencyGraphicsComponent.prototype.GetRatesOnPage = function (pageNumber) {
        if (pageNumber == this.page) {
            return null;
        }
        this.page = pageNumber;
        this.currencyService.GetRatesToChart(pageNumber);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('chart'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], CurrencyGraphicsComponent.prototype, "chartEl", void 0);
    CurrencyGraphicsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-graphics',
            template: __webpack_require__(628),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__currency_service__["a" /* CurrencyService */]) === 'function' && _b) || Object])
    ], CurrencyGraphicsComponent);
    return CurrencyGraphicsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-graphics.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currency_service__ = __webpack_require__(96);
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
    function CurrencyListComponent(curService) {
        var _this = this;
        this.curService = curService;
        this.currencies = []; // Массив курсов полученных валют
        // Подписка на изменение количества страниц
        this.curService.updateTablePages.subscribe(function (data) {
            _this.pages = Array(data);
            _this.page = 0;
        });
        // Подписка на изменение курсов текущих валют
        this.curService.updateTableRates.subscribe(function (data) {
            _this.currencies = data;
        });
    }
    // Метод, срабатывающий при смене страницы
    CurrencyListComponent.prototype.GetRatesOnPage = function (pageNumber) {
        if (pageNumber == this.page) {
            return null;
        }
        this.page = pageNumber;
        this.curService.GetRatesToTable(pageNumber);
    };
    CurrencyListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-currency-list',
            template: __webpack_require__(629),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__currency_service__["a" /* CurrencyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__currency_service__["a" /* CurrencyService */]) === 'function' && _a) || Object])
    ], CurrencyListComponent);
    return CurrencyListComponent;
    var _a;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency-list.component.js.map

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

module.exports = ".col-xs-4, .col-xs-8, .col-xs-12 {\r\n    height: 40em;\r\n}\r\n\r\n.table-hover th:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.table-body tr:hover {\r\n    cursor: default;\r\n}\r\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "#my-drop-down-menu ul, ul#my-drop-down-menu {\r\n    list-style: none;\r\n}\r\n\r\n#my-drop-down-menu {\r\n    position: relative; /* (!) */\r\n    z-index: 3;\r\n    width: 200px;\r\n    height: 20px;\r\n}\r\n\r\n#my-drop-down-menu li:hover {\r\n    background: #97e9eb;\r\n    border: 4px double black;\r\n    border-radius: 3px;\r\n}\r\n\r\n#my-drop-down-menu li {\r\n    background: aliceblue;\r\n}\r\n\r\n#myBtn {\r\n    width: 200px;\r\n}\r\n\r\nli.link {\r\n    list-style: none;\r\n    width: 200px;\r\n}"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n}\r\n\r\n:host .axis path,\r\n:host .axis line {\r\n    fill: none;\r\n    stroke: rgba(0, 0, 0, 0.2);\r\n    color: rgba(0, 0, 0, 0.2);\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n:host .axis text {\r\n    font-size: 11px;\r\n    fill: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n:host .grid .tick {\r\n    stroke: rgba(0, 0, 0, 0.1);\r\n    opacity: 0.3;\r\n}\r\n\r\n:host .grid path {\r\n    stroke-width: 0;\r\n}\r\n\r\n:host .grid .tick {\r\n    stroke: rgba(0, 0, 0, 0.1);\r\n    opacity: 0.3;\r\n}\r\n\r\n:host .grid path {\r\n    stroke-width: 0;\r\n}\r\n\r\n:host .color-label {\r\n    display: inline;\r\n}"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = ".table {\r\n    margin-bottom: 0;\r\n}\r\n\r\n#currencyTable {\r\n    overflow: auto;\r\n    height: 350px;\r\n}"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"container\">\n    <app-currency-form align=\"center\"></app-currency-form>\n    <div class=\"row\">\n        <app-currency-graphics *ngIf=\"viewChart\" [class]=\"viewTable ? 'col-xs-6' : 'col-xs-12'\"></app-currency-graphics>\n        <app-currency-list *ngIf=\"viewTable\" [class]=\"viewChart ? 'col-xs-6' : 'col-xs-12'\"></app-currency-list>\n    </div>\n</div>"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\">\n\n    <div class=\"form-group\" *ngIf=currencyList align=\"center\">\n        <div class=\"btn btn-primary\"\n             id=\"myBtn\"\n             (click)=\"ToggleShowList()\"\n             type=\"button\">\n            Выбрать валюты\n            <b class=\"caret\"></b>\n        </div>\n        <div id=\"my-drop-down-menu\"\n             class=\"list\"\n             *ngIf=\"showList\">\n            <li *ngFor=\"let currency of currencyList\"\n                class=\"link\"\n                (click)=\"AddCurrency(currency)\">\n                <i class=\"glyphicon glyphicon-ok\"\n                   *ngIf=\"selectedCurrencies.indexOf(currency) != -1\"\n                   aria-hidden=\"true\"></i>\n                {{currency.Cur_Name}}\n            </li>\n        </div>\n    </div>\n\n    <div class=\"form-group\" id=\"my-date-from\">\n        На дату с:<input class=\"form-control\" type=\"date\"\n                         [(ngModel)]=\"currencyFirstDate\"\n                         #dateFrom=\"ngModel\"\n                         placeholder=\"yyyy-mm-dd\"\n                         required pattern=\"20[0-9]{2}[\\-\\.\\\\\\/][0-1][0-9][\\-\\.\\\\\\/][0-3][0-9]\">\n        по: <input class=\"form-control\" type=\"date\"\n                   [(ngModel)]=\"currencySecondDate\"\n                   #dateTo=\"ngModel\"\n                   placeholder=\"yyyy-mm-dd\"\n                   required pattern=\"20[0-9]{2}[\\-\\.\\\\\\/][0-1][0-9][\\-\\.\\\\\\/][0-3][0-9]\">\n    </div>\n\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary form-control\"\n                [disabled]=\"dateFrom.invalid || dateTo.invalid\"\n                (click)=\"SendCurrencies()\">\n            Получить\n        </button>\n        <button class=\"btn btn-danger\"\n                (click)=\"ClearSelectedCurrencies()\">Сброс\n        </button>\n    </div>\n</div>\n\n<div *ngIf=\"!error.formValid\"\n     class=\"alert alert-danger\">\n    {{error.msg}}\n</div>"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <a *ngFor=\"let tpage of pages; let i = index\"\r\n           (click)=\"GetRatesOnPage(i)\">\r\n            <i class=\"glyphicon glyphicon-hand-right\"\r\n               *ngIf=\"page == i\"\r\n               aria-hidden=\"true\"></i>\r\n            <span>page {{i+1}}</span>\r\n        </a>\r\n    </div>\r\n    <div #chart></div>\r\n</div>"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currencies.length > 0\">\n    <a *ngFor=\"let tpage of pages; let i = index\"\n       (click)=\"GetRatesOnPage(i)\">\n        <i class=\"glyphicon glyphicon-hand-right\"\n           *ngIf=\"page == i\"\n           aria-hidden=\"true\"></i>\n        <span>page {{i+1}}</span>\n    </a>\n\n    <div id='currencyTable'>\n        <table class=\"table table-striped table-hover table-responsive col-xs-12\">\n            <thead>\n            <tr>\n                <th align=\"center\"\n                    class=\"col-xs-3\">\n                    Дата:\n                </th>\n                <th *ngFor=\"let currencyOnRange of currencies\"\n                    class=\"col-xs-3\"\n                    align=\"center\">\n                    {{currencyOnRange[0].Cur_Name}}\n                </th>\n            </tr>\n            </thead>\n        </table>\n\n        <table class=\"table table-striped table-hover table-responsive col-xs-12\">\n            <tbody>\n            <tr *ngFor=\"let currencyDates of currencies[0]; let i = index;\">\n                <td>\n                    <strong>{{currencies[0][i].Date.slice(5,10).replace('-','.')}}</strong>\n                </td>\n                <td *ngFor=\"let currencyNames of currencies; let j = index\">\n                    {{currencies[j][i].Cur_OfficialRate}}\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
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
        var _this = this;
        this.http = http;
        this.selectedCurs = [];
        this.COUNT_OF_CURS_PER_REQUEST = 3; // Количество графиков/столбцов, которые впоследствии будут отображаться на графике/в таблице
        // Переменная, которая хранит запрошенный курсы валют. На эту переменную подписаны компоненты график currency-graphics и таблица currency-list
        this.updateChartRates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.updateTableRates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        // Переменные, которые отвечают за количество страниц в компонентах currency-graphics и currency-list
        this.updateTablePages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.updateChartPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.updatePermissions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        var url = 'http://angular.f.dev/api/get-user-info';
        this.http.get(url).subscribe(function (data) {
            _this.permissionsInfo = Object.keys(data.json());
            _this.updatePermissions.emit(_this.permissionsInfo);
        });
    }
    // GET Запрос на получение всех доступных для выбора валют
    CurrencyService.prototype.getCurrencyList = function () {
        return this.http.get('http://angular.f.dev/api/get-currencies');
    };
    // POST запрос на получение курсов валют по ID на дату с this.dateFrom по this.dateTo;
    // Ответ от сервера - массив, каждый элемент которого также является массивом и содержит в себе курсы валюты на запрошенный период
    // Т.к. в этом вложенном массиве нет имени валюты (есть только ID), то метод первому элементу массива присваивает
    // имя валюты через метод urIDtoName. Это нужно для дальнейшего отображения в графике и таблице
    CurrencyService.prototype.getCurrenciesRates = function (cursID) {
        var _this = this;
        var url = 'http://angular.f.dev/api/get-currencies-rate-on-range';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers, method: 'post' });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.set('cursID', JSON.stringify(cursID));
        data.set('dateFrom', JSON.stringify(this.dateFrom));
        data.set('dateTo', JSON.stringify(this.dateTo));
        this.http.post(url, data, options).subscribe(function (response) {
            var resp = response.json();
            for (var _i = 0, resp_1 = resp; _i < resp_1.length; _i++) {
                var respCur = resp_1[_i];
                respCur[0].Cur_Name = _this.CurIDtoName(respCur[0].Cur_ID);
            }
            _this.updateChartRates.emit(resp);
            _this.updateTableRates.emit(resp);
        });
    };
    CurrencyService.prototype.getCurrRates = function (cursID) {
        var url = 'http://angular.f.dev/api/get-currencies-rate-on-range';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers, method: 'post' });
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        data.set('cursID', JSON.stringify(cursID));
        data.set('dateFrom', JSON.stringify(this.dateFrom));
        data.set('dateTo', JSON.stringify(this.dateTo));
        return this.http.post(url, data, options);
    };
    // Метод, принимающий выбранные валюты и период от формы
    CurrencyService.prototype.getSelectedCurrencies = function (curs, dateFrom, dateTo) {
        this.selectedCurs = curs;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        var countOfPages = Math.ceil(this.selectedCurs.length / this.COUNT_OF_CURS_PER_REQUEST);
        var startPage = 0;
        if (this.permissionsInfo.indexOf('viewChart') != -1) {
            this.updateChartPages.emit(countOfPages);
            this.GetRatesToChart(startPage);
        }
        if (this.permissionsInfo.indexOf('viewTable') != -1) {
            this.updateTablePages.emit(countOfPages);
            this.GetRatesToTable(startPage);
        }
    };
    // Метод, возвращающий количество максимально отображаемых графиков/столбцов в компоненте currency-graphics/currency-list
    CurrencyService.prototype.GetCountOfCursPerRequest = function () {
        return this.COUNT_OF_CURS_PER_REQUEST;
    };
    // Метод, который срабатывает при смене страницы либо в таблице, либо на графике.
    // Формирует нужные ID и делает запрос на сервер через метод getCurrenciesRates.
    CurrencyService.prototype.GetRatesOnPage = function (pageNumber) {
        var startIndex = pageNumber * this.COUNT_OF_CURS_PER_REQUEST;
        var requestedCurs = this.selectedCurs.slice(startIndex, startIndex + this.COUNT_OF_CURS_PER_REQUEST);
        var IDs = [];
        for (var _i = 0, requestedCurs_1 = requestedCurs; _i < requestedCurs_1.length; _i++) {
            var cur = requestedCurs_1[_i];
            IDs.push(cur.Cur_ID);
        }
    };
    CurrencyService.prototype.GetRatesToChart = function (pageNumber) {
        var _this = this;
        var IDs = this.GetIDsOnPage(pageNumber);
        this.getCurrRates(IDs).subscribe(function (response) {
            var resp = response.json();
            for (var _i = 0, resp_2 = resp; _i < resp_2.length; _i++) {
                var currencyRates = resp_2[_i];
                currencyRates[0].Cur_Name = _this.CurIDtoName(currencyRates[0].Cur_ID);
            }
            _this.updateChartRates.emit(resp);
        });
    };
    CurrencyService.prototype.GetRatesToTable = function (pageNumber) {
        var _this = this;
        var IDs = this.GetIDsOnPage(pageNumber);
        this.getCurrRates(IDs).subscribe(function (response) {
            var resp = response.json();
            for (var _i = 0, resp_3 = resp; _i < resp_3.length; _i++) {
                var currencyRates = resp_3[_i];
                currencyRates[0].Cur_Name = _this.CurIDtoName(currencyRates[0].Cur_ID);
            }
            _this.updateTableRates.emit(resp);
        });
    };
    CurrencyService.prototype.GetPermissionsInfo = function () {
        return this.permissionsInfo;
    };
    CurrencyService.prototype.GetIDsOnPage = function (pageNumber) {
        var startIndex = pageNumber * this.COUNT_OF_CURS_PER_REQUEST;
        var requestedCurs = this.selectedCurs.slice(startIndex, startIndex + this.COUNT_OF_CURS_PER_REQUEST);
        var IDs = [];
        for (var _i = 0, requestedCurs_2 = requestedCurs; _i < requestedCurs_2.length; _i++) {
            var currency = requestedCurs_2[_i];
            IDs.push(currency.Cur_ID);
        }
        return IDs;
    };
    // Метод, возвращающий ID валюты по её имени
    CurrencyService.prototype.CurIDtoName = function (curID) {
        for (var _i = 0, _a = this.selectedCurs; _i < _a.length; _i++) {
            var currency = _a[_i];
            if (currency.Cur_ID == curID) {
                return currency.Cur_Name;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyService.prototype, "updateChartRates", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyService.prototype, "updateTableRates", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyService.prototype, "updateTablePages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyService.prototype, "updateChartPages", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], CurrencyService.prototype, "updatePermissions", void 0);
    CurrencyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], CurrencyService);
    return CurrencyService;
    var _a;
}());
//# sourceMappingURL=C:/OSPanel/domains/TestProjectBank/advanced/frontend/my-app/src/currency.service.js.map

/***/ })

},[664]);
//# sourceMappingURL=main.bundle.map