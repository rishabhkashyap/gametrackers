"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var rxjs_1 = require("rxjs");
var GamesService = (function () {
    function GamesService(http) {
        this.http = http;
        console.log('GamesService Initiated');
    }
    GamesService.prototype.getMessage = function () {
        return this.http.get('http://localhost:3000/api')
            .map(function (response) { return response.text(); })
            .do(function (data) {
            console.log('Data : ' + data);
        })
            .catch(this.handleErrors);
    };
    GamesService.prototype.getAllGames = function () {
        return this.http.get('http://localhost:3000/api/games')
            .map(function (response) { return JSON.parse(response.text()).data; })
            .do(function (data) {
            console.log('Data incoming');
            console.log(data);
        })
            .catch(this.handleErrors);
    };
    GamesService.prototype.getSelectedGame = function (id) {
        return this.http.get('http://localhost:3000/api/games/' + id)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log('Selected Games');
            console.log(data);
        })
            .catch(this.handleErrors);
    };
    GamesService.prototype.handleErrors = function (error) {
        console.log("Error Occured :: " + error);
        return rxjs_1.Observable.throw(error.json().error || 'Server Error Occurred');
    };
    GamesService = __decorate([
        core_1.Injectable()
    ], GamesService);
    return GamesService;
}());
exports.GamesService = GamesService;
