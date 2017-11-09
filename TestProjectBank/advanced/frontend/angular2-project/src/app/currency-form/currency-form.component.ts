import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CurrencyService} from '../currency.service';
@Component({
    selector: 'app-currency-form',
    templateUrl: './currency-form.component.html',
    styleUrls: ['./currency-form.component.css'],
})
export class CurrencyFormComponent {
    private currencyList; // Переменная, хранящая список доступных валют
    public selectedCurrencies = []; // Массив, хранящий выбранные валюты

    private showList = false; // Переменная, контролирующая отображение списка доступных для выбора валют

    public currencyFirstDate; // Переменная, хранящая начальную дату
    public currencySecondDate; // Переменная, хранящая конечную дату
    public error = {msg: '', formValid: true}; // Объект, отвечающий за наличие и содержание ошибки при неправильно введенных данных

    constructor(private currencyService:CurrencyService) {
        this.ClearSelectedCurrencies();
    }

    ngOnInit() {
        this.currencyService.getCurrencyList()
            .subscribe((data) => {
                this.currencyList = data.json();
            });
    }

    // Метод, переключающий отображение списка доступных валют
    ToggleShowList() {
        this.showList = !this.showList;
    }

    // Метод, добавляющий валюту, по которой кликнули, в массив выбранных валют (при наличии этой валюты в массиве, она удаляется из массива выбранных валют)
    AddCurrency(currency) {
        if (this.selectedCurrencies.indexOf(currency) != -1) {
            this.selectedCurrencies.splice(this.selectedCurrencies.indexOf(currency), 1);
        } else {
            this.selectedCurrencies.push(currency);
        }
    }

    // Срабатывает при нажатии на кнопку "Получить"
    // Проверяет, правильно ли введены данные. В случае ошибки показывает ошибку и прекращает своё выполнение
    // Если данные корректны - отправляет их в сервис.
    SendCurrencies() {
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

        let IDs = [];
        for (let ID of this.selectedCurrencies) {
            IDs.push(ID.Cur_ID);
        }

        this.currencyService.getSelectedCurrencies(this.selectedCurrencies, this.currencyFirstDate, this.currencySecondDate);
    }

    // Срабатывает при нажатии на кнопку "Сброс"
    // Очищает форму.
    private ClearSelectedCurrencies() {
        this.selectedCurrencies = [];
        this.currencySecondDate = '';
        this.currencyFirstDate = '';
        this.error.formValid = true;
        this.error.msg = "";
        this.showList = false;
    }

    // Проверка введенных дат
    private CheckDates(date1, date2) {
        let dateFrom = new Date(date1);
        let dateTo = new Date(date2);
        let dateNow = new Date();

        if (dateFrom.toString() === 'Invalid Date' ||
            dateTo.toString() === 'Invalid Date' ||
            +dateFrom > +dateTo ||
            +dateFrom > +dateNow ||
            +dateTo > +dateNow
        ) {
            return false;
        }
        return true;
    }

    // Метод, выводящий ошибку в сообщением msg
    private ShowError(msg) {
        this.error.formValid = false;
        this.error.msg = msg;
    }
}