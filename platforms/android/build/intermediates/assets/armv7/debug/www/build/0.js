webpackJsonp([0],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestPageModule = (function () {
    function TestPageModule() {
    }
    return TestPageModule;
}());
TestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test__["a" /* TestPage */]),
        ],
    })
], TestPageModule);

//# sourceMappingURL=test.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__ = __webpack_require__(14);
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
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(alertCtrl, navCtrl, navParams, dataService, toastCtrl, tematicas) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.tematicas = tematicas;
        this.userRespuestas = [];
        this.showBoton = false;
        this.showCorrecto = false;
        this.showErroneo = false;
        this.shakeA = false;
        this.shakeB = false;
        this.shakeC = false;
        this.shakeD = false;
        this.selectA = false;
        this.selectB = false;
        this.selectC = false;
        this.selectD = false;
        this.idTest = this.navParams.get('idtest');
        this.title = this.navParams.get('nametest');
        this.doexamen = this.navParams.get('doexamen');
        if (this.doexamen != "yes") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
        }
        console.log(this.idTest);
        var sendIdUser = {
            "userid": this.dataService.iduser
        };
        this.tematicas.postData(sendIdUser, "getexameneshechos").then(function (result) {
            var response1 = result;
            var size = Object.keys(response1).length;
            for (var i = 0; i < size; i++) {
                console.log("examen:" + response1[i].id);
                /*
                          if(this.idTest == response1[i].id){
                 let alert = this.alertCtrl.create({
                    title: '¡Lo siento!',
                    message: 'Ya has realizado este examen.',
                    buttons: [
                      
                      {
                        text: 'Ok',
                        handler: () => {
                          
                this.navCtrl.push(InicioPage);
                         
                
                          
                        }
                      }
                    ]
                  });
                  alert.present();
                
                            
                          }*/
            }
            console.log(_this.indicesHech);
        });
        var sendIdTest = {
            "idtest": this.idTest
        };
        this.tematicas.postData(sendIdTest, 'gettest').then(function (result) {
            _this.examen = result;
            console.log(result);
            _this.size = Object.keys(_this.examen).length;
            if (_this.size == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: '¡Lo siento!',
                    message: 'No hay reactivos para este examen',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            _this.finalizar = _this.size - 1;
            _this.contador = 0;
            _this.mostrarCont = _this.contador + 1;
            console.log("Respuesta: " + _this.examen[_this.contador].respuesta);
        }, function (err) {
            // Error log
        });
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage.prototype.seleccionar = function (resp) {
        this.letra = resp;
        if (resp == "A") {
            this.selectA = true;
            this.selectB = false;
            this.selectC = false;
            this.selectD = false;
        }
        else if (resp == "B") {
            this.selectA = false;
            this.selectB = true;
            this.selectC = false;
            this.selectD = false;
        }
        else if (resp == "C") {
            this.selectA = false;
            this.selectB = false;
            this.selectC = true;
            this.selectD = false;
        }
        else if (resp == "D") {
            this.selectA = false;
            this.selectB = false;
            this.selectC = false;
            this.selectD = true;
        }
        this.showBoton = true;
        this.shakeA = false;
        this.shakeB = false;
        this.shakeC = false;
        this.shakeD = false;
    };
    TestPage.prototype.respuesta = function () {
        var _this = this;
        this.selectA = false;
        this.selectB = false;
        this.selectC = false;
        this.selectD = false;
        this.showBoton = false;
        if (this.letra != "") {
            if (this.examen[this.contador].respuesta == this.letra) {
                this.showCorrecto = true;
                //this.presentToast("Correcta.");
                var TIME_IN_MS = 2000;
                var hideFooterTimeout = setTimeout(function () {
                    _this.showCorrecto = false;
                }, TIME_IN_MS);
            }
            else {
                var correcRes = this.examen[this.contador].respuesta;
                if (correcRes == "A") {
                    this.shakeA = true;
                }
                else if (correcRes == "B") {
                    this.shakeB = true;
                }
                else if (correcRes == "C") {
                    this.shakeC = true;
                }
                else if (correcRes == "D") {
                    this.shakeD = true;
                }
                this.showErroneo = true;
                //this.presentToast("Incorrecta.");
                var TIME_IN_MS = 2000;
                var hideFooterTimeout = setTimeout(function () {
                    _this.showErroneo = false;
                }, TIME_IN_MS);
            }
            this.userRespuestas[this.contador] = this.letra;
            //console.log(this.size + " " + this.contador);
            if (this.finalizar == this.contador) {
                console.log("Examen Terminado");
                console.log(this.userRespuestas);
                this.navCtrl.push('ResultadoPage', {
                    idtest: this.idTest,
                    examenData: this.examen,
                    resultados: this.userRespuestas,
                    nameTest: this.title
                });
            }
            else {
                this.contador++;
                this.mostrarCont = this.contador + 1;
                console.log("Respuesta: " + this.examen[this.contador].respuesta);
                this.letra = "";
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: '¡Oops!',
                subTitle: 'No has seleccionado una respuesta.',
                buttons: ['Ok']
            });
            alert_2.present();
        }
    };
    TestPage.prototype.presentToast = function (veredicto) {
        var toast = this.toastCtrl.create({
            message: 'Respuesta ' + veredicto,
            duration: 2000,
            position: 'top'
            // showCloseButton: true
        });
        toast.present();
    };
    TestPage.prototype.backMenu = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Salir del examen',
            message: '¿Estas seguro de salir?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    TestPage.prototype.checkShow = function () {
        /*
          var x = document.getElementById("check");
          x.className = "show";
          setTimeout(function(){ x.className = x.className.replace("show", "hide"); }, 2000);
      */
    };
    TestPage.prototype.minusShow = function () {
        /* var x = document.getElementById("minus");
         x.className = "show";
         setTimeout(function(){ x.className = x.className.replace("show", "hide"); }, 2000);
         */
    };
    return TestPage;
}());
TestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-test',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n--><link rel="stylesheet" href="assets/font-awesome.min.css">\n<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>{{title}}</ion-title>\n\n     <ion-buttons start>\n      <button ion-button icon-only (click)="backMenu()">\n        <ion-icon name="arrow-back"></ion-icon> Salir\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="text-align: center;" padding>\n<div *ngIf="showCorrecto" class="check" id="check"><ion-icon style="font-size: 36vw;" name="checkmark-circle"></ion-icon></div>\n<div *ngIf="showErroneo" class="minus" id="minus"> <ion-icon style="font-size: 36vw;"  name="close-circle"></ion-icon></div>\n<h2 style="color: #10695f;\n    font-family: cursive;\n    font-weight: 700;margin-top: 20px; margin-bottom: 20px;">Pregunta {{mostrarCont}}</h2>\n\n<ion-grid style="margin-top: 15px">\n\n  <ion-row>\n    <ion-col id="botonA" (click)="seleccionar(\'A\')"   [ngClass]="shakeA == true ? \'shake\' : (selectA == true ? \'opacity\' : \'normal\')">\n     <img src="assets/images/A.png">\n    </ion-col>\n    <ion-col [ngClass]="shakeB == true ? \'shake\' : (selectB == true ? \'opacity\' : \'normal\')" (click)="seleccionar(\'B\')">\n    <img src="assets/images/B.png">\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col [ngClass]="shakeC == true ? \'shake\' : (selectC == true ? \'opacity\' : \'normal\')" (click)="seleccionar(\'C\')">\n     <img src="assets/images/C.png">\n    </ion-col>\n    <ion-col [ngClass]="shakeD == true ? \'shake\' : (selectD == true ? \'opacity\' : \'normal\')" (click)="seleccionar(\'D\')">\n   <img src="assets/images/D.png">\n    </ion-col>  \n  </ion-row>\n\n</ion-grid>\n\n<button *ngIf="showBoton" style="margin-top: 25px" id="login-button4"  ion-button full color="primary" (click)="respuesta()">\n        Siguiente\n      </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/test/test.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */]])
], TestPage);

//# sourceMappingURL=test.js.map

/***/ })

});
//# sourceMappingURL=0.js.map