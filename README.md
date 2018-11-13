# Тестовое задание на позицию стажера-разработчика интерфейсов

## Табло аэропорта

Разработайте клиентское приложение(сайт), где будет табло аэропорта. У табло должны быть следующие функции:
* просмотр только вылетающий рейсов
* просмотр только прилетающих рейсов
* просмотр задержанных рейсов
* поиск по номеру рейса

### Реализация

* Приложение было решено реализовать с помощью библиотек react, redux и redux-observable для сайд-эффектов, а также css modules для стилей.
* В качестве инструмента сборки webpack (dev,prod configs)
* Данные берутся из публичного АПИ: https://developer.flightstats.com
* На табло представлены данные о вылетающих, прилетающих рейсах на текущий час. В колонке "статус" можно найти информацию о задержанных рейсах. Также осуществлен поиск отдельно по вылетающим, прилетающим рейсам

## Ticker

Почему this._i не увеличивается. Как исправить?

```sh
function Ticker() { this._i = 0
};
Ticker.prototype = { tick: function() {
console.log(this._i++); }
};
var ticker = new Ticker();
 setInterval(ticker.tick, 1000);
 ```
 
 ### Решение
 
 
 this._i не увеличивается, т.к. теряется контекст. this в этом примере - window.
 Можно решить это несколькими способами. Например, с помощью замыкания или привязав контекст:
 
 ```sh
function Ticker() {
  this._i = 0;
}
Ticker.prototype = {
  tick: function() {
    console.log(this._i++);
  }
};
var ticker = new Ticker();
setInterval(function() {
  ticker.tick();
}, 1000);
  ```
  
  
 ```sh
function Ticker() {
  this._i = 0;
}
Ticker.prototype = {
  tick: function() {
    console.log(this._i++);
  }
};
var ticker = new Ticker();
setInterval(ticker.tick.bind(ticker), 1000);
  ```
