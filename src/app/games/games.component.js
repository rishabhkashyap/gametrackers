"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var games_service_1 = require('./shared/games.service');
var GamesComponent = (function () {
    function GamesComponent(gamesService) {
        this.gamesService = gamesService;
    }
    //TODO: create service for loading games details
    GamesComponent.prototype.ngOnInit = function () {
        this.retrieveGames();
    };
    GamesComponent.prototype.showMsg = function () {
        var _this = this;
        this.gamesService.getMessage()
            .subscribe(function (msg) { return _this.message = msg; });
    };
    GamesComponent.prototype.retrieveGames = function () {
        var _this = this;
        this.gamesService.getAllGames()
            .subscribe(function (games) { return _this.games = games; });
        console.log('Inside Retrieve Games');
        console.log(this.games);
    };
    GamesComponent = __decorate([
        core_1.Component({
            selector: 'app-games',
            templateUrl: './games.component.html',
            styleUrls: ['./games.component.css'],
            providers: [games_service_1.GamesService]
        })
    ], GamesComponent);
    return GamesComponent;
}());
exports.GamesComponent = GamesComponent;
