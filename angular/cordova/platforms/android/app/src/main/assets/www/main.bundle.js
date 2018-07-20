webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/board.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOARD_GENERATE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BOARD_GENERATE_WINNER_SCORES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateBoardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return generateWinnerScores; });
var BOARD_GENERATE_DATA = 'BOARD_GENERATE_DATA';
var BOARD_GENERATE_WINNER_SCORES = 'BOARD_GENERATE_WINNER_SCORES';
var generateBoardData = function (data) { return ({
    type: BOARD_GENERATE_DATA,
    payload: data
}); };
var generateWinnerScores = function (data) { return ({
    type: BOARD_GENERATE_WINNER_SCORES,
    payload: data
}); };




/***/ }),

/***/ "../../../../../src/app/actions/participants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PARTICIPANT_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PARTICIPANT_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PARTICIPANT_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PARTICIPANT_GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return remove; });
/* unused harmony export edit */
/* unused harmony export get */
var PARTICIPANT_ADD = 'PARTICIPANT_ADD';
var PARTICIPANT_REMOVE = 'PARTICIPANT_REMOVE';
var PARTICIPANT_EDIT = 'PARTICIPANT_EDIT';
var PARTICIPANT_GET = 'PARTICIPANT_GET';
var add = function (data) { return ({
    type: PARTICIPANT_ADD,
    payload: data
}); };
var remove = function (id) { return ({
    type: PARTICIPANT_REMOVE,
    payload: id
}); };
var edit = function (id) { return ({
    type: PARTICIPANT_EDIT,
    payload: id
}); };
var get = function (id) { return ({
    type: PARTICIPANT_GET,
    payload: id
}); };




/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_routes__ = __webpack_require__("../../../../../src/app/config/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_participants_participants_component__ = __webpack_require__("../../../../../src/app/components/participants/participants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_participant_participant_component__ = __webpack_require__("../../../../../src/app/components/participant/participant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_participants_service__ = __webpack_require__("../../../../../src/app/services/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_participant_form_participant_form_component__ = __webpack_require__("../../../../../src/app/components/participant-form/participant-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_board_board_component__ = __webpack_require__("../../../../../src/app/components/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_limit_to__ = __webpack_require__("../../../../../src/app/pipes/limit-to.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_participants_participants_component__["a" /* ParticipantsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_participant_participant_component__["a" /* ParticipantComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_participant_form_participant_form_component__["a" /* ParticipantFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_board_board_component__["a" /* BoardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_limit_to__["a" /* LimitToPipe */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__reducers__["a" /* default */], {
                    initialState: {
                        participants: JSON.parse(localStorage.getItem('participants')) || [],
                        board: {
                            fields: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                            winnerScores: []
                        }
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__config_routes__["a" /* appRoutes */], { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_participants_service__["a" /* ParticipantsService */], __WEBPACK_IMPORTED_MODULE_11__services_board_service__["a" /* BoardService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board-fields {\n  width: 400px;\n  text-align: center;\n}\n\n@media (max-width: 1100px) {\n  .board-fields {\n    margin: auto;\n  }\n}\n\n.board-fields td {\n  width: 30%;\n  height: 40px;\n  border: 1px solid gray;\n  margin: 5px;\n}\n\n.board-fields td:hover {\n  background: rgba(148, 204, 214, 0.24);\n  cursor: pointer;\n}\n\n.selected {\n  background: #94ccd6;\n}\n\n.board {\n  width: 578px;\n  margin: auto;\n}\n\n.winner {\n  background: floralwhite;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <h2>Board</h2>\n  <table class=\"board-fields\">\n    <tr *ngFor=\"let i of boardFields\">\n      <td *ngFor=\"let j of i\" [ngClass]=\"{'winner': winnerScores.includes(j)}\">{{j}}</td>\n    </tr>\n  </table>\n\n  <button (click)=\"startGame()\">Start</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardComponent = (function () {
    function BoardComponent(route, boardService) {
        var _this = this;
        this.route = route;
        this.boardService = boardService;
        this.route.params.subscribe(function (params) { return _this.participantId = params.id; });
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.winnerScores = [];
        this.winners = [];
    };
    ;
    BoardComponent.prototype.startGame = function () {
        this.start();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "start", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], BoardComponent.prototype, "winnerScores", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], BoardComponent.prototype, "boardFields", void 0);
    BoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-board',
            template: __webpack_require__("../../../../../src/app/components/board/board.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/board/board.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_board_service__["a" /* BoardService */]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 1000px;\n  margin: auto;\n}\n\n@media (max-width: 1100px) {\n  .game-wrapper {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    text-align: center;\n  }\n}\n\n.add-button {\n  padding: 15px;\n  margin: 30px auto auto;\n  text-align: center;\n  display: block;\n  width: 180px;\n  border: 1px solid #94ccd6;\n  background: #a2bdff;\n  color: #fff;\n  text-decoration: none;\n}\n\n.add-button:hover {\n  background: #79b6ff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game-wrapper\">\n  <app-board [start]=\"start\" [boardFields]=\"boardFields\" [winnerScores]=\"winnerScores\"></app-board>\n  <app-participants [winners]=\"winners\" [participants]=\"participants\"></app-participants>\n</div>\n\n<a class=\"add-button\" routerLink=\"/add\">Add new Participant</a>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_board_service__ = __webpack_require__("../../../../../src/app/services/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_participants_service__ = __webpack_require__("../../../../../src/app/services/participants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = (function () {
    function GameComponent(boardService, participantsService) {
        var _this = this;
        this.boardService = boardService;
        this.participantsService = participantsService;
        this.start = function () {
          debugger
             navigator.notification.prompt('this is a text', null, 'Game Over');
            _this.winnerScores = _this.boardService.getWinnerScores();
            _this.boardService.generateWinnerBoard();
            _this.boardFields = _this.boardService.getBoardFields();
            _this.showWinner();
        };
    }
    GameComponent.prototype.ngOnInit = function () {
        this.winners = [];
        this.participants = this.participantsService.getParticipants();
        this.boardFields = this.boardService.getBoardFields();
    };
    ;
    GameComponent.prototype.showWinner = function () {
        var _this = this;
        var winnerScores = this.winnerScores.join('');
        this.participants = this.participantsService.getParticipants();
        this.participants.forEach(function (participant) {
            if (participant.bet !== winnerScores) {
                return;
            }
            _this.winners.push(participant.id);
        });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/components/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_board_service__["a" /* BoardService */],
            __WEBPACK_IMPORTED_MODULE_2__services_participants_service__["a" /* ParticipantsService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/participant-form/participant-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".participant-form {\n  width: 1000px;\n  margin: auto;\n  text-align: center;\n}\n\n@media (max-width: 1200px) {\n  .participant-form {\n    width: 500px;\n  }\n}\n\n@media (max-width: 800px) {\n  .participant-form {\n    width: 100%;\n  }\n}\n\n.participant-form label,\n.participant-form input {\n  display: block;\n}\n\n.participant-form input {\n  width: 500px;\n  margin: 15px auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n@media (max-width: 600px) {\n  .participant-form input {\n    width: 100%;\n  }\n}\n\n.error {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/participant-form/participant-form.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"participant-form\">\n  <h2>Participant</h2>\n  <form action=\"\" [formGroup]=\"heroForm\" novalidate>\n    <label>\n      Name\n      <input type=\"text\" formControlName=\"name\">\n      <span *ngIf=\"nameErrorText\" class=\"error\">{{nameErrorText}}</span>\n    </label>\n    <label>\n      Age\n      <input type=\"text\" formControlName=\"age\">\n    </label>\n    <label>\n      Bet\n      <input type=\"text\" formControlName=\"bet\">\n    </label>\n\n    <button type=\"submit\" (click)=\"save($event)\">Save</button>\n  </form>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/components/participant-form/participant-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_participants_service__ = __webpack_require__("../../../../../src/app/services/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_firstUpperLetter__ = __webpack_require__("../../../../../src/app/validators/firstUpperLetter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParticipantFormComponent = (function () {
    function ParticipantFormComponent(route, participantsService, fb) {
        var _this = this;
        this.route = route;
        this.participantsService = participantsService;
        this.fb = fb;
        this.nameErrorText = '';
        this.route.parent.params.subscribe(function (params) { return _this.parentParticipantId = params.id; });
        this.route.params.subscribe(function (params) { return _this.participantId = params.id; });
    }
    ParticipantFormComponent.prototype.createForm = function (data) {
        this.heroForm = this.fb.group({
            name: [data.name, Object(__WEBPACK_IMPORTED_MODULE_4__validators_firstUpperLetter__["a" /* FirstUpperLetterValidator */])()],
            age: [data.age, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required],
            bet: [data.bet, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]
        });
    };
    ParticipantFormComponent.prototype.ngOnInit = function () {
        this.participant = this.participantId
            ? this.participantsService.getParticipant(this.participantId)
            : { id: '', name: '', age: null, bet: [] };
        this.createForm(this.participant);
    };
    ParticipantFormComponent.prototype.save = function (e) {
        var participant = { id: String(Date.now()), name: null, age: null, bet: null };
        e.preventDefault();
        this.nameErrorText = this.heroForm.get('name').errors
            ? this.heroForm.get('name').errors.error
            : '';
        if (this.nameErrorText) {
            return;
        }
        participant.id = this.parentParticipantId || this.participantId
            ? this.participantId
            : String(Date.now());
        participant.name = this.heroForm.value.name;
        participant.age = this.heroForm.value.age;
        participant.bet = this.heroForm.value.bet;
        this.participantsService.add(participant);
    };
    ParticipantFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participant-form',
            template: __webpack_require__("../../../../../src/app/components/participant-form/participant-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/participant-form/participant-form.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_participants_service__["a" /* ParticipantsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ParticipantFormComponent);
    return ParticipantFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/participant/participant.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".participant {\n  width: 300px;\n  margin: auto;\n  border: 1px solid gray;\n  padding: 15px;\n  text-align: center;\n}\n\n.participant button {\n  display: block;\n  margin: auto;\n}\n\n.participant input {\n  display: block;\n  margin: 10px auto;\n}\n\n.participant a {\n  display: inline-block;\n  margin-top: 15px;\n  color: black;\n  text-decoration: none;\n  border: 1px solid gray;\n  padding: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/participant/participant.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"participant\">\n  <h2>Name: {{participant.name}}</h2>\n  <p>Age: {{participant.age}}</p>\n  <p>Balance: {{participant.balance}}</p>\n\n  <div>\n    <div><button (click)=\"edit(participant.id)\">Edit</button></div>\n    <input #input type=\"text\">\n    <button (click)=\"placeBet(input.value)\">Place a bet</button>\n  </div>\n  <a routerLink=\"/\">Back to Game</a>\n</article>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/participant/participant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_participants_service__ = __webpack_require__("../../../../../src/app/services/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantComponent = (function () {
    function ParticipantComponent(participantsService, route, router) {
        var _this = this;
        this.participantsService = participantsService;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) { return _this.participantId = params.id; });
    }
    ParticipantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participant = this.participantsService.getParticipants().find(function (item) { return item.id == _this.participantId; });
    };
    ParticipantComponent.prototype.edit = function (id) {
        this.router.navigateByUrl("/edit/" + id);
    };
    ParticipantComponent.prototype.placeBet = function (value) {
        console.log(value);
    };
    ParticipantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participant',
            template: __webpack_require__("../../../../../src/app/components/participant/participant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/participant/participant.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_participants_service__["a" /* ParticipantsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ParticipantComponent);
    return ParticipantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/participants/participants.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".participants {\n  list-style-type: none;\n  width: 400px;\n  padding: 10px;\n}\n\n@media (max-width: 1100px) {\n  .participants {\n    margin: auto;\n  }\n}\n\n.participants li {\n  border: 1px solid grey;\n  margin-bottom: 5px;\n  padding: 5px;\n}\n\n.participants li:hover {\n  background: #94ccd6;\n  cursor: pointer;\n}\n.participants a {\n  display: block;\n  color: black;\n}\n\n.participants p {\n  margin: 0;\n}\n\n.participant {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.remove-btn {\n  border: 0;\n  width: 20%;\n}\n\n.participant-link {\n  width: 75%;\n}\n\n.winner {\n  background: floralwhite;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/participants/participants.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Participants</h2>\n<ul class=\"participants\">\n  <li *ngFor=\"let participant of participants\" [ngClass]=\"{'winner': winners.includes(participant.id)}\">\n    <p class=\"participant\">\n      <a class=\"participant-link\" [routerLink]=\"['participant', participant.id]\">{{participant.name | limitTo: 5}}</a>\n      <button (click)=\"remove(participant.id)\" class=\"remove-btn\">Remove</button>\n    </p>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/participants/participants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_participants_service__ = __webpack_require__("../../../../../src/app/services/participants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParticipantsComponent = (function () {
    function ParticipantsComponent(participantsService) {
        this.participantsService = participantsService;
    }
    ParticipantsComponent.prototype.ngOnInit = function () { };
    ParticipantsComponent.prototype.remove = function (id) {
        var _this = this;
        this.participantsService.remove(id, function (data) {
            _this.participants = data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ParticipantsComponent.prototype, "winners", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ParticipantsComponent.prototype, "participants", void 0);
    ParticipantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-participants',
            template: __webpack_require__("../../../../../src/app/components/participants/participants.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/participants/participants.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_participants_service__["a" /* ParticipantsService */]])
    ], ParticipantsComponent);
    return ParticipantsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_participant_participant_component__ = __webpack_require__("../../../../../src/app/components/participant/participant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_participant_form_participant_form_component__ = __webpack_require__("../../../../../src/app/components/participant-form/participant-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");





var appRoutes = [
    {
        path: 'participant/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_participant_participant_component__["a" /* ParticipantComponent */],
        children: [
            {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_2__components_participant_form_participant_form_component__["a" /* ParticipantFormComponent */]
            }
        ]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_2__components_participant_form_participant_form_component__["a" /* ParticipantFormComponent */],
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_participant_form_participant_form_component__["a" /* ParticipantFormComponent */],
    },
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_game_game_component__["a" /* GameComponent */],
        pathMatch: 'full'
    },
    { path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];



/***/ }),

/***/ "../../../../../src/app/pipes/limit-to.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitToPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitToPipe = (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (value, endSlice) {
        return value.slice(0, endSlice + 1) + "...";
    };
    LimitToPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'limitTo' })
    ], LimitToPipe);
    return LimitToPipe;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/board.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_board__ = __webpack_require__("../../../../../src/app/actions/board.ts");

/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_board__["a" /* BOARD_GENERATE_DATA */]) {
        return {
            winnerScores: state.winnerScores,
            fields: action.payload
        };
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_board__["b" /* BOARD_GENERATE_WINNER_SCORES */]) {
        return {
            winnerScores: action.payload,
            fields: state.fields
        };
    }
    return state;
});;


/***/ }),

/***/ "../../../../../src/app/reducers/game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_participants__ = __webpack_require__("../../../../../src/app/actions/participants.ts");

var initialState = [];
/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["a" /* PARTICIPANT_ADD */]) {
        return initialState.concat(action.payload);
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["b" /* PARTICIPANT_EDIT */]) {
        var participants = state.filter(function (participant) { return participant.id !== action.id; });
        return [
            participants,
            {
                id: action.payload.id
            }
        ];
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["d" /* PARTICIPANT_REMOVE */]) {
        return state.filter(function (participant) { return participant.id !== action.payload; });
    }
    return state;
});;


/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__("../../../../../src/app/reducers/game.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__participants__ = __webpack_require__("../../../../../src/app/reducers/participants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board__ = __webpack_require__("../../../../../src/app/reducers/board.ts");



/* harmony default export */ __webpack_exports__["a"] = ({
    game: __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */],
    participants: __WEBPACK_IMPORTED_MODULE_1__participants__["a" /* default */],
    board: __WEBPACK_IMPORTED_MODULE_2__board__["a" /* default */]
});


/***/ }),

/***/ "../../../../../src/app/reducers/participants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_participants__ = __webpack_require__("../../../../../src/app/actions/participants.ts");

/* harmony default export */ __webpack_exports__["a"] = (function (state, action) {
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["a" /* PARTICIPANT_ADD */]) {
        var newState = state.filter(function (participant) { return participant.id != action.payload.id; });
        return newState.concat([
            action.payload
        ]);
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["c" /* PARTICIPANT_GET */]) {
        return state.find(function (participant) { return participant.id === action.payload; });
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["b" /* PARTICIPANT_EDIT */]) {
        return state.concat([
            action.payload
        ]);
    }
    if (action.type === __WEBPACK_IMPORTED_MODULE_0__actions_participants__["d" /* PARTICIPANT_REMOVE */]) {
        return state.filter(function (participant) { return participant.id != action.payload; });
    }
    return state;
});;


/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_board__ = __webpack_require__("../../../../../src/app/actions/board.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = (function () {
    function BoardService(store) {
        this.store = store;
    }
    BoardService.prototype.generateWinnerBoard = function () {
        var randomArray = this.generateRandomArrayWithUniqueNumbers(9, 9);
        var firstRow = randomArray.slice(0, 3);
        var secondRow = randomArray.slice(3, 6);
        var thirdRow = randomArray.slice(6);
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_board__["c" /* generateBoardData */])([firstRow, secondRow, thirdRow]));
    };
    BoardService.prototype.getBoardFields = function () {
        var _this = this;
        this.store.select('board').subscribe(function (board) {
            _this.boardFields = board.fields;
        });
        return this.boardFields;
    };
    BoardService.prototype.generateRandomArrayWithUniqueNumbers = function (length, maxNumber) {
        var arr = [];
        while (arr.length < length) {
            var randomnumber = Math.floor(Math.random() * maxNumber) + 1;
            if (arr.indexOf(randomnumber) > -1)
                continue;
            arr[arr.length] = randomnumber;
        }
        return arr;
    };
    BoardService.prototype.generateWinnerScores = function () {
        var results = this.generateRandomArrayWithUniqueNumbers(3, 9);
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions_board__["d" /* generateWinnerScores */])(results));
    };
    BoardService.prototype.getWinnerScores = function () {
        var _this = this;
        this.generateWinnerScores();
        this.store.select('board').subscribe(function (board) {
            _this.winnerScores = board.winnerScores;
        });
        return this.winnerScores;
    };
    BoardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/participants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_participants__ = __webpack_require__("../../../../../src/app/actions/participants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantsService = (function () {
    function ParticipantsService(store, router) {
        this.store = store;
        this.router = router;
    }
    ParticipantsService.prototype.saveToLocalStorage = function (items) {
        localStorage.setItem('participants', JSON.stringify(items));
    };
    ParticipantsService.prototype.restore = function () {
        return JSON.parse(localStorage.getItem('participants'));
    };
    ParticipantsService.prototype.getParticipants = function () {
        var _this = this;
        this.store.select('participants').subscribe(function (items) {
            _this.participants = items;
        });
        return this.participants;
    };
    ParticipantsService.prototype.getParticipant = function (id) {
        if (!this.participants) {
            this.getParticipants();
        }
        return this.participants.find(function (participant) { return participant.id == id; });
    };
    ParticipantsService.prototype.add = function (participant) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_participants__["e" /* add */])(participant));
        this.store.select('participants').subscribe(this.saveToLocalStorage);
        this.router.navigateByUrl('/');
    };
    ParticipantsService.prototype.remove = function (id, cb) {
        var _this = this;
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions_participants__["f" /* remove */])(id));
        this.store.select('participants').subscribe(function (data) {
            _this.saveToLocalStorage(data);
            cb(data);
        });
    };
    ParticipantsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ParticipantsService);
    return ParticipantsService;
}());



/***/ }),

/***/ "../../../../../src/app/validators/firstUpperLetter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FirstUpperLetterValidator;
function FirstUpperLetterValidator() {
    return function (control) {
        if (!control.value) {
            return null;
        }
        var name = control.value;
        var firstLetter = name[0];
        var firstUpperLetter = firstLetter.toUpperCase();
        return firstLetter === firstUpperLetter
            ? null
            : { error: 'The first letter is not uppercase' };
    };
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
