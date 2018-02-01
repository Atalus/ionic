webpackJsonp([1],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoPageModule", function() { return ResultadoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultado__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultadoPageModule = (function () {
    function ResultadoPageModule() {
    }
    return ResultadoPageModule;
}());
ResultadoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__resultado__["a" /* ResultadoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultado__["a" /* ResultadoPage */]),
        ],
    })
], ResultadoPageModule);

//# sourceMappingURL=resultado.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ResultadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResultadoPage = (function () {
    function ResultadoPage(navCtrl, navParams, iab, plt, loadingCtrl, tematicas, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.tematicas = tematicas;
        this.dataService = dataService;
        this.resultado = "cargando";
        this.showImg = false;
        this.showImg2 = false;
        this.showErrors = false;
        this.loading = this.loadingCtrl.create({
            content: 'Estamos obteniendo tu calificación...'
        });
        this.loading.present();
        this.resultadosTest = this.navParams.get('resultados');
        this.examenData = eval(this.navParams.get('examenData'));
        this.nombreExamen = this.navParams.get('nameTest');
        this.correctas = this.navParams.get('correctas');
        this.sizeTest = this.navParams.get('sizeTest');
        console.log("correctas: ", this.correctas);
        console.log("sizeTest: ", this.sizeTest);
        this.size = Object.keys(this.examenData).length;
        this.finalizar = this.size - 1;
        console.log("resultado: " + this.resultadosTest);
        console.log(this.examenData);
        this.calcular();
        console.log("userid: " + this.dataService.iduser);
        plt.registerBackButtonAction(function () {
            _this.navCtrl.push('InicioPage');
        });
    }
    ResultadoPage.prototype.openLink = function (www) {
        var browser = this.iab.create(www, '_system');
    };
    ResultadoPage.prototype.recorrerTest = function () {
        this.correctas = 0;
        this.erroneas = 0;
        var preguntasString;
        for (var i = 0; i < this.size; i++) {
            if (this.examenData[i].respuesta == this.resultadosTest[i]) {
                this.correctas++;
                console.log(i + "correcta");
            }
            else {
                if (this.erroneas == 0) {
                    preguntasString = this.examenData[i].id_pregunta;
                }
                else {
                    preguntasString = preguntasString + ", " + this.examenData[i].id_pregunta;
                }
                this.erroneas++;
            }
        }
        this.sendData = {
            "testidenviar": this.idtest,
            "idquestion": preguntasString,
            "userid": this.dataService.iduser
        };
        //console.log("string: " +preguntasString);
        this.resultado = this.correctas / this.size;
        this.resultado = this.resultado * 100;
        this.resultado = this.resultado.toFixed(0);
        if (this.resultado < 59) {
            this.colorcali = "orange";
        }
        console.log("total correctas: " + this.correctas);
        console.log("resultado: " + this.resultado);
        this.loading.dismiss();
    };
    ResultadoPage.prototype.calcular = function () {
        this.resultado = this.correctas / this.size;
        this.resultado = this.resultado * 100;
        this.resultado = this.resultado.toFixed(0);
        if (this.resultado < 59) {
            this.colorcali = "orange";
        }
        console.log("total correctas: " + this.correctas);
        console.log("resultado: " + this.resultado);
        this.loading.dismiss();
    };
    ResultadoPage.prototype.backMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    ResultadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadoPage');
    };
    return ResultadoPage;
}());
ResultadoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resultado',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/resultado/resultado.html"*/'<!--\n  Generated template for the ResultadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Resultado</ion-title>\n     <ion-buttons start>\n      <button ion-button icon-only (click)="backMenu()">\n        <ion-icon name="arrow-back"></ion-icon> Volver\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n<ion-card>\n<h1 style="text-align: center; margin-top: 10px; margin-bottom: 10px; color: #000000">Resultado</h1>\n\n<section style="     width: 100%;\n\n    align-content: center;\n    text-align: center;\n    background-color: rgb(246, 146, 0);\n    border-top: gray;\n    border-top-style: solid;" class="container">\n  \n\n <h1 style="font-size: 200px">{{resultado}}</h1>\n  \n</section>\n\n\n\n</ion-card>\n\n<h3 style="    margin-top: 35px;\n    margin-bottom: 5px;\n    text-align: center;\n    font-weight: initial;" *ngIf="showErrors">Tus errores:</h3>\n\n<ion-card *ngFor="let retro of responseData">\n\n		<ion-card-header>\n			<span style="color: #1b998b; font-weight: bolder">Pregunta {{retro.id_pregunta}}</span> <span>{{retro.tematica}}</span>\n		</ion-card-header>\n\n		<ion-card-content style="color: #0684f9" (click)="openLink(this.retro.www)">\n		{{retro.www}}\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/resultado/resultado.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */]])
], ResultadoPage);

//# sourceMappingURL=resultado.js.map

/***/ })

});
//# sourceMappingURL=1.js.map