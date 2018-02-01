webpackJsonp([17],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the SucursalmodalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SucursalmodalPage = (function () {
    function SucursalmodalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SucursalmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SucursalmodalPage');
    };
    return SucursalmodalPage;
}());
SucursalmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sucursalmodal',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/sucursalmodal/sucursalmodal.html"*/'<!--\n  Generated template for the SucursalmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Información Plantel</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/sucursalmodal/sucursalmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SucursalmodalPage);

//# sourceMappingURL=sucursalmodal.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LocationPage = (function () {
    function LocationPage(formBuilder, tematicas, navCtrl, maps, platform, dataService, alertCtrl, geolocation, diagnostic, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.tematicas = tematicas;
        this.navCtrl = navCtrl;
        this.maps = maps;
        this.platform = platform;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.diagnostic = diagnostic;
        this.loadingCtrl = loadingCtrl;
        this.planteles = this.dataService.sucursales;
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function (location) {
            _this.dataService.getLocation().then(function (location) {
                var savedLocation = false;
                if (location && typeof (location) != "undefined") {
                    savedLocation = JSON.parse(location);
                }
                var mapLoaded = _this.maps.init(_this.mapElement.nativeElement, _this.pleaseConnect.nativeElement).then(function () {
                    if (savedLocation) {
                        _this.latitude = savedLocation.latitude;
                        _this.longitude = savedLocation.longitude;
                        _this.maps.changeMarker(_this.latitude, _this.longitude);
                    }
                    _this.planteles = _this.dataService.sucursales;
                    console.log(_this.planteles);
                });
            });
        });
    };
    LocationPage.prototype.setLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            _this.maps.changeMarker(position.coords.latitude, position.coords.longitude);
            var data = {
                latitude: _this.latitude,
                longitude: _this.longitude
            };
            _this.dataService.setLocation(data);
            var alert = _this.alertCtrl.create({
                title: 'Location set!',
                subTitle: 'You can now find your way back to your camp site from anywhere by clicking the button in the top right corner',
                buttons: [{ text: 'Ok' }]
            });
            alert.present();
        });
    };
    LocationPage.prototype.takeMeHome = function () {
        if (!this.latitude || !this.longitude) {
            var alert_1 = this.alertCtrl.create({
                title: 'Nowhere to go!',
                subTitle: 'You need to set your camp location first. For now, want to launch Maps to find your own way home?',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        else {
            var destination = this.latitude + ',' + this.longitude;
            if (this.platform.is('ios')) {
                window.open('maps://?q=' + destination, '_system');
            }
            else {
                var label = encodeURI('My Campsite');
                window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
            }
        }
    };
    LocationPage.prototype.presentLoading = function () {
    };
    LocationPage.prototype.buscar = function () {
    };
    LocationPage.prototype.onSelectChange = function (selectedValue) {
        var _this = this;
        console.log('Selected', selectedValue);
        this.sendServicioData2 = {
            "sucursal": selectedValue
        };
        this.tematicas.postData(this.sendServicioData2, 'getcordsbyname').then(function (result) {
            _this.responseData2 = result;
            var latNew = _this.responseData2[0].esc_lat;
            var longNew = _this.responseData2[0].esc_long;
            console.log(latNew);
            console.log(longNew);
            _this.maps.changeSucursal(latNew, longNew);
        });
    };
    return LocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], LocationPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('pleaseConnect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], LocationPage.prototype, "pleaseConnect", void 0);
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/location/location.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Planteles</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n	<div #pleaseConnect id="please-connect">\n		<p>Por favor, conectate a internet...</p>\n\n	</div>\n\n	<div #map id="map"></div>\n\n	\n\n</ion-content>\n<ion-footer style="background-color: #FFFFFF">\n  <ion-toolbar>\n    <ion-grid no-padding class="ion-grid-footer">\n  \n  <ion-row style="background-color: white;" no-padding>\n    <ion-col no-padding >\n      <ion-item>\n     \n    <ion-label stacked>Selecciona un plantel</ion-label>\n     <ion-select (ionChange)="onSelectChange($event)">\n   <ion-option *ngFor="let plantel of planteles" >{{plantel}}</ion-option>\n   \n\n  </ion-select>\n  \n  </ion-item>\n\n    </ion-col>\n  \n\n    <ion-col>\n     <ion-item>\n    \n  </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubtestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(24);
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
 * Generated class for the SubtestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubtestPage = SubtestPage_1 = (function () {
    function SubtestPage(sanitizer, navCtrl, navParams, tematicas) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tematicas = tematicas;
        this.examenes = [];
        this.examen = [];
        this.indices = [];
        this.isFlag = false;
        this.isPrep = false;
        this.isComp = false;
        this.idSub = this.navParams.get('idsub');
        this.title = this.navParams.get('title');
        console.log("categoria: " + this.idSub);
        if (Number(this.idSub) == 6) {
            this.isFlag = true;
        }
        else if (Number(this.idSub) == 7 || Number(this.idSub) == 23) {
            this.isPrep = true;
        }
        else if (Number(this.idSub) == 5) {
            this.isComp = true;
        }
        if (Number(this.idSub) == 23) {
            this.sendData = {
                "idexamen": this.idSub
            };
            this.tematicas.postData(this.sendData, 'getcolbach').then(function (result) {
                _this.indices = result;
                var size = Object.keys(_this.examenes).length;
            });
        }
        else {
            this.sendData = {
                "idexamen": this.idSub
            };
            this.tematicas.postData(this.sendData, 'getexamenessub').then(function (result) {
                console.log(result);
                _this.indices = result;
                var size = Object.keys(_this.examenes).length;
                /*
                for(let i = 0; i < size; i++){
          
                   
                      
                    this.examen = {
                      "id": this.examenes[i].id,
                      "nombre": this.examenes[i].nombre
                    };
          
                    console.log(this.examen);
          
                    this.indices.push(this.examen);
            
                }*/
                //console.log(this.indices);
            });
        }
    }
    SubtestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubpagePage');
    };
    SubtestPage.prototype.goToSub = function (id) {
        this.cachnum = id;
        var chnmm = id;
        if (chnmm.id == 23) {
            console.log("subtest");
            this.navCtrl.push(SubtestPage_1, {
                idsub: 23,
                title: "COLBACH"
            });
        }
        else {
            console.log("test");
            this.navCtrl.push('TestPage', {
                idtest: id.id,
                nametest: id.nombre,
                doexamen: "yes"
            });
        }
    };
    return SubtestPage;
}());
SubtestPage = SubtestPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subtest',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/subtest/subtest.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Examenes: {{title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n       <img style="    width: 50%;" src="assets/images/logomapa-white.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-grid *ngIf="isPrep" >\n\n  <ion-row>\n    <ion-col style="    margin-bottom: 100px;" class="rojo" *ngFor="let exmn of indices" (tap)="goToSub(this.exmn)" col-6 col-12>\n      <table style="margin: 0 auto; text-align: center" cellspacing="0" cellpadding="0">\n          <tr>\n           <td *ngIf="exmn.img == \'bis.png\'" style="background-image: url(assets/images/icons/prepa/bis.png);\n     background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'unexamen.png\'" style="background-image: url(assets/images/icons/prepa/unexamen.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #ef4b23;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 20px;\n    font-size: 1.2em; "></td>\n          </tr>\n        </table>\n        <ion-col style="    color: #ef4b23;\n    font-size: 1.1em;">\n{{exmn.nombre}}\n        </ion-col>\n    \n\n </ion-col>\n\n  \n   </ion-row>\n\n\n\n</ion-grid>\n\n\n<div *ngIf="isComp" clas="container">\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col *ngFor="let exmn of indices" (tap)="goToSub(this.exmn)" col-6 col-lg>\n      <table style="margin: 0 auto; max-width: 90px;" cellspacing="0" cellpadding="0">\n          <tr>\n            <td *ngIf="exmn.img == \'webmaster.png\'" style="background-image: url(assets/images/icons/cursos/webmaster.png);\n     background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'administrativo.png\'" style="background-image: url(assets/images/icons/cursos/administrativo.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'autocad.png\'" style="background-image: url(assets/images/icons/cursos/autocad.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'computacion-basica.png\'" style="background-image: url(assets/images/icons/cursos/computacion-basica.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'diseno.png\'" style="background-image: url(assets/images/icons/cursos/diseno.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'informatica.png\'" style="background-image: url(assets/images/icons/cursos/informatica.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'mantenimiento.png\'" style="background-image: url(assets/images/icons/cursos/mantenimiento.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n    <td *ngIf="exmn.img == \'programacion.png\'" style="background-image: url(assets/images/icons/cursos/programacion.png);\n    background-size: cover;\n    width: 90px;height: 90px; max-width: 90px;"></td>\n\n          </tr>\n          <tr>\n            <td style="\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1em;">{{exmn.nombre}}</td>\n          </tr>\n        </table>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n	<!--<button *ngFor="let exmn of indices" (tap)="goToSub(this.exmn)" ion-button full>{{exmn.nombre}}</button>-->\n\n\n</div>\n\n	<ion-grid style="    width: 60%;" *ngIf="isFlag">\n\n  <ion-row *ngFor="let exmn of indices" [ngSwitch]="exmn.sub_sub" (click)="goToSub(this.exmn)">\n\n     <ion-col *ngSwitchCase="3" class="rojo usa" (tap)="goToSub(1)">\n  \n     \n    </ion-col>\n    <ion-col *ngSwitchCase="4" class="rojo francia" (tap)="goToSub(1)">\n  \n     \n    </ion-col>\n    <ion-col *ngSwitchCase="5" class="rojo alemania" (tap)="goToSub(1)">\n  \n     \n    </ion-col>\n    <ion-col *ngSwitchCase="6" class="rojo brasil" (tap)="goToSub(1)">\n  \n     \n    </ion-col>\n    <ion-col *ngSwitchCase="7" class="rojo italia" (tap)="goToSub(1)">\n  \n     \n    </ion-col>\n     <ion-col *ngSwitchCase="8" class="rojo china" (tap)="goToSub(1)">\n  \n     \n    </ion-col>\n\n\n   </ion-row>\n\n</ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/subtest/subtest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */]])
], SubtestPage);

var SubtestPage_1;
//# sourceMappingURL=subtest.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestUbicacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the TestUbicacionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TestUbicacionPage = (function () {
    function TestUbicacionPage(alertCtrl, navCtrl, navParams, loadingCtrl, dataService, toastCtrl, tematicas, formBuilder) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.tematicas = tematicas;
        this.formBuilder = formBuilder;
        this.NumPregunta = 1;
        this.showTest = true;
        this.showPreloader = false;
        this.contadorCiclo = 0;
        this.userRespuestas = [];
        this.showBoton = false;
        this.showCorrecto = false;
        this.showErroneo = false;
        this.selectA = false;
        this.selectB = false;
        this.selectC = false;
        this.selectD = false;
        this.rateForm = formBuilder.group({
            opcionesForm: ['']
        });
        this.presentLoading();
        this.idTest = 22;
        this.nivel = 1;
        this.contarCorrecta = 0;
        this.doexamen = this.navParams.get('doexamen');
        if (this.doexamen != "yes") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
        }
        console.log(this.idTest);
        var sendIdUser = {
            "userid": this.dataService.iduser
        };
        var sendIdTest = {
            "idtest": this.idTest
        };
        this.tematicas.postData(sendIdTest, 'gettestubicaciones').then(function (result) {
            _this.examen = result;
            console.log(result);
            _this.size = Object.keys(_this.examen).length;
            _this.finalizar = _this.size - 1;
            _this.contadorCiclo = 0;
            _this.contador = 0;
            _this.mostrarCont = _this.contador + 1;
            _this.pregunta = _this.examen[_this.contador].pregunta;
            _this.opcion1 = _this.examen[_this.contador].opcion_1;
            _this.opcion2 = _this.examen[_this.contador].opcion_2;
            _this.opcion3 = _this.examen[_this.contador].opcion_3;
            _this.opcion4 = _this.examen[_this.contador].opcion_4;
            console.log("Respuesta: " + _this.examen[_this.contador].respuesta);
        }, function (err) {
            // Error log
        });
    }
    TestUbicacionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestUbicacionPage');
    };
    TestUbicacionPage.prototype.siguientePregunta = function () {
        var _this = this;
        var formControls = this.rateForm.controls;
        var data = this.rateForm.value;
        this.letra = data.opcionesForm;
        var evaluarText = "select" + this.examen[this.contador].respuesta;
        if (this.letra == evaluarText) {
            this.contarCorrecta++;
        }
        console.log("respuesta: " + evaluarText + " - correcta: " + this.letra);
        this.userRespuestas[this.contador] = this.letra;
        this.contador++;
        if (this.contador == this.size) {
            this.showTest = false;
            this.showPreloader = true;
            if (this.contarCorrecta > 7) {
                console.log("pasamos al siguiente nivel");
                this.nivel++;
            }
            var TIME_IN_MS = 2000;
            var hideFooterTimeout = setTimeout(function () {
                _this.navCtrl.push('ResultadoUbicacionPage', {
                    idtest: _this.idTest,
                    examenData: _this.examen,
                    resultados: _this.userRespuestas,
                    nameTest: _this.title,
                    nivel: _this.nivel
                });
            }, TIME_IN_MS);
        }
        else {
            this.contadorCiclo++;
            if (this.contadorCiclo == 10) {
                console.log("evaluar");
                if (this.contarCorrecta > 7) {
                    console.log("pasamos al siguiente nivel");
                    this.contarCorrecta = 0;
                    this.contadorCiclo = 0;
                    this.nivel++;
                }
                else {
                    console.log("no pasamos");
                    this.salirText();
                }
            }
            formControls.opcionesForm.setValue();
            this.NumPregunta++;
            this.presentLoading();
            this.pregunta = this.examen[this.contador].pregunta;
            this.opcion1 = this.examen[this.contador].opcion_1;
            this.opcion2 = this.examen[this.contador].opcion_2;
            this.opcion3 = this.examen[this.contador].opcion_3;
            this.opcion4 = this.examen[this.contador].opcion_4;
            console.log("Respuesta: " + this.examen[this.contador].respuesta);
        }
    };
    TestUbicacionPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Cargando Pregunta...",
            duration: 1000
        });
        loader.present();
    };
    TestUbicacionPage.prototype.salirText = function () {
        var _this = this;
        this.showTest = false;
        this.showPreloader = true;
        var TIME_IN_MS = 2000;
        var hideFooterTimeout = setTimeout(function () {
            _this.navCtrl.push('ResultadoUbicacionPage', {
                idtest: _this.idTest,
                examenData: _this.examen,
                resultados: _this.userRespuestas,
                nameTest: _this.title,
                nivel: _this.nivel
            });
        }, TIME_IN_MS);
    };
    return TestUbicacionPage;
}());
TestUbicacionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-test-ubicacion',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/test-ubicacion/test-ubicacion.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Examen ubicación</ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf="showTest">\n<h3>Question #{{NumPregunta}}</h3>\n<p>{{pregunta}}</p>\n <form [formGroup]="rateForm" (ngSubmit)="siguientePregunta()">\n\n    \n\n<ion-list  formControlName="opcionesForm" radio-group>\n  <ion-item>\n    <ion-label text-wrap>a) {{opcion1}}</ion-label>\n    <ion-radio value="select1" checked></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>b) {{opcion2}}</ion-label>\n    <ion-radio value="select2"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>c) {{opcion3}}</ion-label>\n    <ion-radio value="select3"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>d) {{opcion4}}</ion-label>\n    <ion-radio value="select4"></ion-radio>\n  </ion-item>\n</ion-list>\n<hr>\n <!-- Real floating action button, fixed. It will not scroll with the content -->\n <ion-fab>\n   <button type="submit" ion-fab>Next</button>\n </ion-fab>\n\n\n\n    </form>\n    </div>\n    <div *ngIf="showPreloader" style="background-color: #FFFFFF; height: 100%; width: 100%;">\n    	<img src="assets/images/01-progress.gif">\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/test-ubicacion/test-ubicacion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
], TestUbicacionPage);

//# sourceMappingURL=test-ubicacion.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subtest_subtest__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_ubicacion_test_ubicacion__ = __webpack_require__(115);
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
 * Generated class for the SubpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SubpagePage = (function () {
    function SubpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showTests = false;
        this.showTestsIngles = false;
        this.idSub = this.navParams.get('idsub');
        if (this.idSub == 666) {
            this.showTestsIngles = true;
        }
        else {
            this.showTests = true;
        }
    }
    SubpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubpagePage');
    };
    SubpagePage.prototype.goToSub = function (id) {
        var title = "";
        if (id == 5) {
            title = "Computación";
        }
        else if (id == 6) {
            title = "Idiomas";
        }
        if (id == 7) {
            title = "Preparatoria";
        }
        if (id === 666) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test_ubicacion_test_ubicacion__["a" /* TestUbicacionPage */], {
                doexamen: "yes"
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subtest_subtest__["a" /* SubtestPage */], {
                idsub: id,
                title: title
            });
        }
    };
    return SubpagePage;
}());
SubpagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subpage',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/subpage/subpage.html"*/'<ion-header>\n\n  <ion-navbar color="naranja">\n    <ion-title>Examenes</ion-title>\n\n     <ion-buttons end>\n      <button ion-button icon-only>\n       <img style="    width: 50%;" src="assets/images/logomapa-white.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="showTests">\n\n\n<ion-grid>\n\n  <ion-row>\n    <ion-col class="rojo" (tap)="goToSub(5)">\n      <table style="margin: 0 auto; text-align: center" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/computacion.png);\n    background-size: cover;\n    width: 100px;height: 100px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #ef4b23;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em; ">Computación</td>\n          </tr>\n        </table>\n\n </ion-col>\n\n  \n   </ion-row>\n\n\n\n    <ion-row>\n      <ion-col class="rojo" (tap)="goToSub(6)">\n      <table style="margin: 0 auto; text-align: center" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/idiomas.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #ef4b23;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Idiomas</td>\n          </tr>\n        </table>\n\n </ion-col>\n\n    \n   </ion-row>\n\n\n    <ion-row>\n     \n\n      <ion-col class="rojo" (tap)="goToSub(7)">\n\n       <table style="margin: 0 auto; width: 90px; text-align: center" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/preparatoria.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #ef4b23;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Preparatoria</td>\n          </tr>\n        </table>\n    </ion-col>\n   </ion-row>\n  \n\n</ion-grid>\n\n</ion-content>\n\n<ion-content padding *ngIf="showTestsIngles">\n\n<button (click)="goToSub(666)" style="background-color: #f69200" ion-button full>Exámen Ingles</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/subpage/subpage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SubpagePage);

//# sourceMappingURL=subpage.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(16);
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
 * Generated class for the MyDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyDetailsPage = (function () {
    function MyDetailsPage(navCtrl, platform, formBuilder, dataService, tematicas) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.tematicas = tematicas;
        this.sufijo = "Dr.";
        this.myDetailsForm = formBuilder.group({
            prefijoForm: ['1'],
            nameForm: [''],
            lastNameForm: [''],
            mailForm: [''],
            passForm: ['']
        });
    }
    MyDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.user = {
                'iduser': _this.dataService.iduser
            };
            _this.tematicas.postData(_this.user, "getuser").then(function (details) {
                console.log(details);
                _this.response = details;
                _this.formControls = _this.myDetailsForm.controls;
                _this.formControls.prefijoForm.setValue(_this.response.userData.sufijo);
                _this.formControls.nameForm.setValue(_this.response.userData.first_name);
                _this.formControls.lastNameForm.setValue(_this.response.userData.last_name);
                _this.formControls.mailForm.setValue(_this.response.userData.email);
                //formControls.passForm.setValue(this.response.userData.passForm);
            });
        });
    };
    MyDetailsPage.prototype.saveForm = function () {
        /* this.sendData = {
           "iduser": this.dataService.iduser,
           "sufijo": this.formControls.prefijoForm.getValue(),
           "first_name": this.formControls.nameForm.getValue(),
           "last_name": this.formControls.lastNameForm.getValue(),
           "email": this.formControls.mailForm.getValue()
         }
         console.log(this.sendData);*/
        var data = this.myDetailsForm.value;
        console.log(data);
        this.dataService.setMyDetails(data);
    };
    return MyDetailsPage;
}());
MyDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-details',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/my-details/my-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n    	Mis datos\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card>\n\n		<ion-card-header>\n			Mis Datos\n		</ion-card-header>\n\n		<ion-card-content>\n		Es importante mantener tus datos actualizados.\n		</ion-card-content>\n\n	</ion-card>	\n\n	<ion-list no-lines>\n		<form [formGroup]="myDetailsForm" (change)="saveForm()">\n		<ion-item>\n			<ion-label stacked>Sexo</ion-label>\n     <ion-select placeholder="Selecciona una opción." (ionChange)="saveForm()" formControlName="prefijoForm">\n    <ion-option  value="Masculino">Masculino</ion-option>\n    <ion-option value="Femenino">Femenino</ion-option>\n    \n\n  </ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Nombre</ion-label>\n			<ion-input formControlName="nameForm" type="text"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Apellido</ion-label>\n			<ion-input formControlName="lastNameForm" type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label stacked>Email</ion-label>\n			<ion-input formControlName="mailForm" type="mail"></ion-input>\n		</ion-item>\n\n\n		<ion-item>\n			<ion-label stacked>Contraseña</ion-label>\n			<ion-input formControlName="passForm" type="password"></ion-input>\n		</ion-item>\n\n		\n</form>\n\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/my-details/my-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */]])
], MyDetailsPage);

//# sourceMappingURL=my-details.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_details_my_details__ = __webpack_require__(117);
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
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, tematicas, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tematicas = tematicas;
        this.dataService = dataService;
        this.user = {
            "id": this.dataService.iduser,
            "name": this.dataService.username,
            "avatar": this.dataService.picture
        };
        /*this.dataService.getExamenesHechos().then((result) => {
    
            this.responseData = eval(result);
                var size = Object.keys(this.responseData).length;
          for(let i = 0; i < size; i++){
               
             console.log();
    
          }
            
        });*/
    }
    PerfilPage.prototype.goToDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_details_my_details__["a" /* MyDetailsPage */]);
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/perfil/perfil.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="profile-image">\n      <img src="{{user.avatar}}" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <h3 id="menu-heading1" style="color:#000000;font-weight:300;text-align:center;">\n      {{user.name}}  <ion-icon (click)="goToDetails()" name="create"></ion-icon><br>\n    </h3>\n    <h2>Examenes:</h2>\n<ion-item no-padding *ngFor="let examen of responseData">\n        <ion-avatar item-left>\n          <img width="70%" src="assets/images/fondo.png" />\n        </ion-avatar>\n        <h2 style="font-weight: bold;">\n          {{examen.nombre}}\n        </h2>\n        Calificación {{examen.promedio}}\n      </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/perfil/perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.gotootpconfirm = function () {
        this.navCtrl.push('OtpconfirmPage');
    };
    return ForgotpasswordPage;
}());
ForgotpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgotpassword',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/forgotpassword/forgotpassword.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title style="text-align: center;">Recuperar contraseña</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n       <img style="    width: 50%;" src="assets/images/logomapa.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="forgotpassword">\n    <div class="image_section">\n      <img style="    width: 30%;\n    padding-top: 50px;" src="assets/images/logo-header-password.png" alt="">\n\n    <h2 style="    color: #c1151d;\n    text-align: center;\n    font-weight: 400;\n    font-size: larger;    padding-bottom: 20px;\n    border-bottom-color: #e5e6e6;\n    border-bottom-style: solid;">¿Olvidaste tu contraseña?</h2>\n    </div>\n    <div class="input_section">\n      \n      <p style="     width: 50%;\n    margin: 0 auto;\n    color: gray;\n    opacity: 0.7;\n    padding-bottom: 20px;">Te enviaremos un link para reestablecer tu contraseña</p>\n      <div class="input_area">\n      <ion-icon  style="    font-size: 2.5em;" name="ios-contact-outline"></ion-icon>\n      <input type="email" placeholder="Escribe tu mátricula">\n    </div>\n    <button ion-button full color=primary margin-top icon-start>\n     <ion-icon style="    font-size: 2.5em;" name="ios-mail-outline"></ion-icon>\n      Enviar link\n    </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/forgotpassword/forgotpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ForgotpasswordPage);

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_municipios_municipios__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_colonias_colonias__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_gettematicas_gettematicas__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SignupPage = (function () {
    function SignupPage(tematicas, formBuilder, loadingCtrl, municipiosProv, coloniasProv, navCtrl, authService, dataService, menu) {
        this.tematicas = tematicas;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.municipiosProv = municipiosProv;
        this.coloniasProv = coloniasProv;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.dataService = dataService;
        this.menu = menu;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
        this.showError = false;
        this.showMunicipio = false;
        this.showColonia = false;
        this.myDetailsForm = formBuilder.group({
            matriculaForm: [''],
            nameForm: [''],
            lastNameForm: [''],
            emailForm: [''],
            telForm: [''],
            estadoForm: ['*'],
            municipioForm: ['*'],
            coloniaForm: ['*'],
            cpForm: [''],
            passForm: [''],
            sexoForm: ['*'],
            plantelForm: ['*']
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Accediendo...'
        });
        this.loading.present();
        var data = this.myDetailsForm.value;
        console.log(data);
        this.authService.postData(data, 'signup').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            if (_this.responseData.error == 1) {
                _this.showError = true;
                _this.error = _this.responseData.msg;
                _this.loading.dismiss();
            }
            else {
                if (!isNaN(parseInt(_this.responseData.userData.uid))) {
                    var sucArray_1 = [];
                    _this.tematicas.postData("", "sucursales").then(function (result) {
                        var response1 = result;
                        _this.size = Object.keys(response1).length;
                        for (var i = 0; i < _this.size; i++) {
                            sucArray_1.push(response1[i].esc_desc);
                        }
                        _this.dataService.sucursales = sucArray_1;
                        localStorage.setItem('userData', JSON.stringify(_this.responseData));
                        var nameUser = _this.responseData.userData.first_name;
                        nameUser = nameUser + _this.responseData.userData.last_name;
                        _this.dataService.fbid = null;
                        _this.dataService.iduser = _this.responseData.userData.uid;
                        _this.dataService.username = nameUser;
                        _this.dataService.matricula = _this.responseData.userData.id_matricula;
                        _this.dataService.picture = "assets/images/noavatar.png";
                        _this.menu.enable(true);
                        _this.loading.dismiss();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inicio_inicio__["a" /* InicioPage */]);
                    });
                }
            }
        }, function (err) {
            // Error log
        });
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.onSelectEstadoChange = function (selectedValue) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
        console.log('Selected', selectedValue);
        this.municipiosProv.getData(selectedValue).then(function (result) {
            console.log(result);
            _this.municipios = result;
            _this.showMunicipio = true;
            _this.loading.dismiss();
        });
    };
    SignupPage.prototype.onSelectMunicipioChange = function (selectedValue) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
        console.log('Selected', selectedValue);
        this.coloniasProv.getData(selectedValue).then(function (result) {
            console.log(result);
            _this.colonias = result;
            _this.showColonia = true;
            _this.loading.dismiss();
        });
    };
    SignupPage.prototype.onSelectColoniaChange = function (selectedValue) {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loading.present();
        console.log('Selected', selectedValue);
        this.showColonia = false;
        var formControls = this.myDetailsForm.controls;
        formControls.cpForm.setValue(selectedValue);
        this.loading.dismiss();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/signup/signup.html"*/'<ion-content class="appBackground">\n  <ion-card>\n    <ion-card-header>\n      Crear cuenta como alumno Pre-Existente\n    </ion-card-header>\n    <ion-card-content>\n    <form [formGroup]="myDetailsForm">\n      <ion-list>\n      <ion-item style="align-items: baseline;">\n          <ion-label style="color: red" stacked>Matrícula</ion-label>\n          <ion-input style="width: 40%" type="text" formControlName="matriculaForm"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Nombre(s)</ion-label>\n          <ion-input type="text" formControlName="nameForm"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Apellido</ion-label>\n          <ion-input type="text" formControlName="lastNameForm"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input type="text" formControlName="emailForm"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Teléfono</ion-label>\n          <ion-input type="text" formControlName="telForm"></ion-input>\n        </ion-item>\n		<ion-item>\n    <ion-label stacked>Sexo</ion-label>\n     <ion-select formControlName="sexoForm">\n\n	<ion-option value="*">*Selecciona tu sexo</ion-option>\n    <ion-option  value="Masculino">Masculino</ion-option>\n	<ion-option  value="Femenino">Femenino</ion-option>\n\n  </ion-select>\n  </ion-item>\n        <ion-item>\n    <ion-label stacked>Estado</ion-label>\n     <ion-select formControlName="estadoForm" (ionChange)="onSelectEstadoChange($event)">\n\n	<ion-option value="*">*Selecciona tu estado</ion-option>\n    <ion-option  value="Aguascalientes">Aguascalientes</ion-option>\n    <ion-option value="Baja California">Baja California</ion-option>\n    <ion-option value="Baja California Sur">Baja California Sur</ion-option>\n    <ion-option value="Campeche">Campeche</ion-option>\n    <ion-option value="Coahuila de Zaragoza">Coahuila de Zaragoza</ion-option>\n    <ion-option value="Colima">Colima</ion-option>\n    <ion-option value="Chiapas">Chiapas</ion-option>\n    <ion-option value="Chihuahua">Chihuahua</ion-option>\n    <ion-option value="Distrito Federal">Distrito Federal</ion-option>\n    <ion-option value="Durango">Durango</ion-option>\n    <ion-option value="Guanajuato">Guanajuato</ion-option>\n    <ion-option value="Guerrero">Guerrero</ion-option>\n    <ion-option value="Hidalgo">Hidalgo</ion-option>\n    <ion-option value="Jalisco">Jalisco</ion-option>\n    <ion-option value="México">México</ion-option>\n    <ion-option value="Michoacán de Ocampo">Michoacán de Ocampo</ion-option>\n    <ion-option value="Morelos">Morelos</ion-option>\n    <ion-option value="Nayarit">Nayarit</ion-option>\n    <ion-option value="Nuevo León">Nuevo León</ion-option>\n    <ion-option value="Oaxaca">Oaxaca</ion-option>\n    <ion-option value="Puebla">Puebla</ion-option>\n    <ion-option value="Querétaro">Querétaro</ion-option>\n    <ion-option value="Quintana Roo">Quintana Roo</ion-option>\n    <ion-option value="San Luis Potosí">San Luis Potosí</ion-option>\n    <ion-option value="Sinaloa">Sinaloa</ion-option>\n    <ion-option value="Sonora">Sonora</ion-option>\n    <ion-option value="Tabasco">Tabasco</ion-option>\n    <ion-option value="Tamaulipas">Tamaulipas</ion-option>\n    <ion-option value="Tlaxcala">Tlaxcala</ion-option>\n    <ion-option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</ion-option>\n    <ion-option value="Yucatán">Yucatán</ion-option>\n    <ion-option value="Zacatecas">Zacatecas</ion-option>\n\n\n  </ion-select>\n  </ion-item>\n  <ion-item *ngIf="showMunicipio">\n    <ion-label stacked>Municipio</ion-label>\n    <ion-select formControlName="municipioForm" (ionChange)="onSelectMunicipioChange($event)">\n    	<ion-option value="*">*Selecciona tu municipio</ion-option>\n		<ion-option *ngFor="let municipio of municipios" value="{{municipio.municipio}}">{{municipio.municipio}}</ion-option>\n	</ion-select>\n  </ion-item>\n  <ion-item *ngIf="showColonia">\n    <ion-label stacked>Colonia</ion-label>\n    <ion-select formControlName="coloniaForm" (ionChange)="onSelectColoniaChange($event)">\n    	<ion-option value="*">*Selecciona tu colonia</ion-option>\n		<ion-option *ngFor="let colonia of colonias" value="{{colonia.cp}}">{{colonia.colonia}}</ion-option>\n	</ion-select>\n  </ion-item>\n  <ion-item>\n          <ion-label stacked>C.P.</ion-label>\n          <ion-input type="number" formControlName="cpForm"></ion-input>\n        </ion-item>\n        <ion-item>\n    <ion-label stacked>Selecciona tu Plantel</ion-label>\n     <ion-select formControlName="plantelForm">\n\n	<ion-option value="*" >*Selecciona tu plantel actual</ion-option>\n    <ion-option  value="1">Tránsito</ion-option>\n	<ion-option  value="2">Chapalita</ion-option>\n	<ion-option  value="3">Oblatos</ion-option>\n	<ion-option  value="4">Colón</ion-option>\n	<ion-option  value="5">León</ion-option>\n	<ion-option  value="6">Cancún</ion-option>\n	<ion-option  value="7">Santa Margarita</ion-option>\n	<ion-option  value="21">Cancún Sur</ion-option>\n\n  </ion-select>\n  </ion-item>\n\n        <ion-item style="margin-bottom: 20px">\n          <ion-label stacked>Contraseña (mínimo 6 caracteres).</ion-label>\n          <ion-input type="password" formControlName="passForm"></ion-input>\n        </ion-item>\n\n        <div *ngIf="showError" id="login-markdown2" class="show-list-numbers-and-dots error-box">\n      <p style="color:#FFFFFF;">\n        {{error}}\n      </p>\n    </div>\n\n        <button ion-button full color="success" (click)="signup()">Crear Cuenta</button>\n        <a  href="#" (click)="login()">Regresar</a>\n      </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_municipios_municipios__["a" /* MunicipiosProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_colonias_colonias__["a" /* ColoniasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettematicasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://www.datalus.mx/projects/ivei/apitest/';
var GettematicasProvider = (function () {
    function GettematicasProvider(http) {
        this.http = http;
        console.log('Hello GettematicasProvider Provider');
    }
    GettematicasProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return GettematicasProvider;
}());
GettematicasProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GettematicasProvider);

//# sourceMappingURL=gettematicas.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataProvider = (function () {
    function DataProvider(storage, zone) {
        this.storage = storage;
        this.zone = zone;
    }
    DataProvider.prototype.addDocument = function (message) {
        this.db.put(message);
    };
    DataProvider.prototype.getDocuments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true,
                limit: 30,
                descending: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                _this.data.reverse();
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    DataProvider.prototype.handleChange = function (change) {
        var _this = this;
        console.log(change);
        this.zone.run(function () {
            var changedDoc = null;
            var changedIndex = null;
            _this.data.forEach(function (doc, index) {
                if (doc._id === change.id) {
                    changedDoc = doc;
                    changedIndex = index;
                }
            });
            //A document was deleted
            if (change.deleted) {
                _this.data.splice(changedIndex, 1);
            }
            else {
                // A document was updated
                if (changedDoc) {
                    _this.data[changedIndex] = change.doc;
                }
                else {
                    _this.data.push(change.doc);
                }
            }
        });
    };
    DataProvider.prototype.setMyDetails = function (data) {
        var newData = JSON.stringify(data);
        this.storage.set('mydetails', newData);
    };
    DataProvider.prototype.setExamen = function (data, name) {
        var newData = JSON.stringify(data);
        this.storage.remove(name);
        this.storage.set(name, newData);
    };
    DataProvider.prototype.setCampDetails = function (data) {
        var newData = JSON.stringify(data);
        this.storage.set('campdetails', newData);
    };
    DataProvider.prototype.salirData = function () {
        this.storage.remove('mydetails');
        this.storage.remove('indice');
        this.storage.remove('exameneshechos');
    };
    DataProvider.prototype.setLocation = function (data) {
        var newData = JSON.stringify(data);
        this.storage.set('location', newData);
    };
    DataProvider.prototype.getExams = function () {
        return this.storage.get('indice');
    };
    DataProvider.prototype.getExam = function (idexamen) {
        var nameEX = "examen" + idexamen;
        console.log(nameEX);
        return this.storage.get(nameEX);
    };
    DataProvider.prototype.getExamenesHechos = function () {
        return this.storage.get('exameneshechos');
    };
    DataProvider.prototype.getMyDetails = function () {
        return this.storage.get('mydetails');
    };
    DataProvider.prototype.getCampDetails = function () {
        return this.storage.get('campdetails');
    };
    DataProvider.prototype.getLocation = function () {
        return this.storage.get('location');
    };
    DataProvider.prototype.getData = function () {
        return this.storage.get('checklists');
    };
    DataProvider.prototype.save = function (data) {
        var saveData = [];
        //Remove observables
        data.forEach(function (checklist) {
            saveData.push({
                title: checklist.title,
                items: checklist.items
            });
        });
        var newData = JSON.stringify(saveData);
        this.storage.set('checklists', newData);
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bar-code/bar-code.module": [
		305,
		16
	],
	"../pages/forgotpassword/forgotpassword.module": [
		310,
		15
	],
	"../pages/inicio/inicio.module": [
		306,
		14
	],
	"../pages/location/location.module": [
		300,
		13
	],
	"../pages/login/login.module": [
		311,
		12
	],
	"../pages/my-details/my-details.module": [
		308,
		11
	],
	"../pages/pagos/pagos.module": [
		304,
		10
	],
	"../pages/perfil/perfil.module": [
		309,
		9
	],
	"../pages/ranking/ranking.module": [
		307,
		8
	],
	"../pages/resultado-ubicacion/resultado-ubicacion.module": [
		314,
		2
	],
	"../pages/resultado/resultado.module": [
		313,
		1
	],
	"../pages/signup/signup.module": [
		312,
		7
	],
	"../pages/subpage/subpage.module": [
		303,
		6
	],
	"../pages/subtest/subtest.module": [
		301,
		5
	],
	"../pages/sucursalmodal/sucursalmodal.module": [
		299,
		4
	],
	"../pages/test-ubicacion/test-ubicacion.module": [
		302,
		3
	],
	"../pages/test/test.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connectivity_connectivity__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sucursalmodal_sucursalmodal__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoogleMapsProvider = (function () {
    function GoogleMapsProvider(dataService, connectivityService, geolocation, alertCtrl, tematicas, modalCtrl) {
        this.dataService = dataService;
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.tematicas = tematicas;
        this.modalCtrl = modalCtrl;
        this.mapInitialised = false;
        this.apiKey = "AIzaSyAhmNtb_n0eE92QfH-Nfoxisx7ZFCKviTw";
    }
    GoogleMapsProvider.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function () {
                            resolve(true);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.initMap();
                    _this.enableMap();
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsProvider.prototype.initMap = function () {
        var _this = this;
        var optionsGPS = { timeout: 5000 };
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            _this.geolocation.getCurrentPosition(optionsGPS).then(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapOptions = {
                    center: latLng,
                    zoom: 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                //this.changeMarker(position.coords.latitude, position.coords.longitude);
                //console.log(position.coords.latitude + "--"+position.coords.longitude);
                _this.tematicas.postData(_this.sendData, "sucursales").then(function (result) {
                    _this.response1 = result;
                    _this.size = Object.keys(_this.response1).length;
                    console.log(_this.size);
                    var image = 'http://www.datalus.mx/projects/ivei/logomapa.png';
                    var sucArray = [];
                    var myScope = {};
                    var _loop_1 = function (i) {
                        var contentString = '<div id="content">' +
                            '<div id="siteNotice">' +
                            '</div>' +
                            '<h1 id="firstHeading" class="firstHeading">' + _this.response1[i].esc_desc + '</h1> <hr />' +
                            '<div id="bodyContent">' +
                            '<p>' + _this.response1[i].desc_app + '</p>' +
                            '</div>' +
                            '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });
                        sucArray.push(_this.response1[i].esc_desc);
                        var latLng22 = new google.maps.LatLng(_this.response1[i].esc_lat, _this.response1[i].esc_long);
                        myScope["marker" + i] = new google.maps.Marker({
                            map: _this.map,
                            draggable: false,
                            animation: google.maps.Animation.DROP,
                            icon: image,
                            position: latLng22
                        });
                        myScope["marker" + i].addListener('click', function () {
                            console.log(i);
                            infowindow.open(this.map, myScope["marker" + i]);
                        });
                    };
                    for (var i = 0; i < _this.size; i++) {
                        _loop_1(i);
                    }
                    console.log(sucArray);
                    _this.dataService.sucursales = sucArray;
                });
                resolve(true);
            }).catch(function (err) { return console.log(err); });
        });
    };
    GoogleMapsProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        this.connectivityService.watchOnline().subscribe(function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        });
        this.connectivityService.watchOffline().subscribe(function () {
            console.log("offline");
            _this.disableMap();
        });
    };
    GoogleMapsProvider.prototype.presentWelcomeModal = function () {
        var welcomeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_sucursalmodal_sucursalmodal__["a" /* SucursalmodalPage */], {});
        welcomeModal.onDidDismiss(function (data) {
        });
        welcomeModal.present();
    };
    GoogleMapsProvider.prototype.changeMarker = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        //console.log(latLng);
        var marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        if (this.currentMarker) {
            //this.currentMarker.setMap(null);
        }
        //this.currentMarker.push(marker);
        //console.log(marker);
    };
    GoogleMapsProvider.prototype.changeSucursal = function (lat, lng) {
        var latLng = new google.maps.LatLng(lat, lng);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
        if (this.currentMarker) {
            //this.currentMarker.setMap(null);
        }
        //this.currentMarker.push(marker);
        //console.log(marker);
    };
    return GoogleMapsProvider;
}());
GoogleMapsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__connectivity_connectivity__["a" /* ConnectivityProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], GoogleMapsProvider);

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityProvider = (function () {
    function ConnectivityProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type != 'none';
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type == 'none';
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityProvider.prototype.watchOnline = function () {
        return this.network.onConnect();
    };
    ConnectivityProvider.prototype.watchOffline = function () {
        return this.network.onDisconnect();
    };
    return ConnectivityProvider;
}());
ConnectivityProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
], ConnectivityProvider);

//# sourceMappingURL=connectivity.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PayuProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var apiUrl = 'http://www.ivei.mx/alumnos/php/sent-payment-month-app.php';
var PayuProvider = (function () {
    function PayuProvider(http) {
        this.http = http;
        console.log('Hello PayuProvider Provider');
    }
    PayuProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PayuProvider.prototype.getData = function (muni) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.get(apiUrl + "?" + muni, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return PayuProvider;
}());
PayuProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PayuProvider);

//# sourceMappingURL=payu.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MunicipiosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://www.ivei.mx/includes/get-municipios.php';
var MunicipiosProvider = (function () {
    function MunicipiosProvider(http) {
        this.http = http;
        console.log('Hello MunicipiosProvider Provider');
    }
    MunicipiosProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    MunicipiosProvider.prototype.getData = function (muni) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.get(apiUrl + "?idpadre=" + muni, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return MunicipiosProvider;
}());
MunicipiosProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], MunicipiosProvider);

//# sourceMappingURL=municipios.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColoniasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://www.ivei.mx/includes/get-colonias.php';
var ColoniasProvider = (function () {
    function ColoniasProvider(http) {
        this.http = http;
        console.log('Hello MunicipiosProvider Provider');
    }
    ColoniasProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ColoniasProvider.prototype.getData = function (muni) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.get(apiUrl + "?idpadre=" + muni, { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return ColoniasProvider;
}());
ColoniasProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ColoniasProvider);

//# sourceMappingURL=colonias.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetExamenesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://www.datalus.mx/projects/cam/appmobile/api/get-tests.php';
var GetExamenesProvider = (function () {
    function GetExamenesProvider(http) {
        this.http = http;
        console.log('Hello GetExamenesProvider Provider');
    }
    GetExamenesProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return GetExamenesProvider;
}());
GetExamenesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], GetExamenesProvider);

//# sourceMappingURL=get-examenes.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the RankingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RankingPage = (function () {
    function RankingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RankingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankingPage');
    };
    return RankingPage;
}());
RankingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ranking',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/ranking/ranking.html"*/'<!--\n  Generated template for the RankingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ranking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/ranking/ranking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(90);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(tematicas, navCtrl, authService, platform, menu, dataService, alertCtrl, loadingCtrl) {
        this.tematicas = tematicas;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.platform = platform;
        this.menu = menu;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "password": "", "username": "" };
        this.showError = false;
        this.error = "";
        //this.navCtrl.push(TinderPage);
        this.loading = this.loadingCtrl.create({
            content: 'Ingresando...'
        });
        this.menu.enable(false);
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Accediendo...'
        });
        this.loading.present();
        console.log(this.userData);
        this.authService.postData(this.userData, 'login').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            console.log(_this.responseData.error);
            if (_this.responseData.error == 1) {
                _this.showError = true;
                _this.error = _this.responseData.msg;
                _this.loading.dismiss();
            }
            else {
                if (!isNaN(parseInt(_this.responseData.userData.uid))) {
                    var sucArray_1 = [];
                    _this.tematicas.postData("", "sucursales").then(function (result) {
                        var response1 = result;
                        _this.size = Object.keys(response1).length;
                        for (var i = 0; i < _this.size; i++) {
                            sucArray_1.push(response1[i].esc_desc);
                        }
                        console.log(result);
                        console.log("succcc" + sucArray_1);
                        _this.dataService.sucursales = sucArray_1;
                        localStorage.setItem('userData', JSON.stringify(_this.responseData));
                        var nameUser = _this.responseData.userData.first_name;
                        nameUser = nameUser + _this.responseData.userData.last_name;
                        _this.dataService.fbid = null;
                        _this.dataService.iduser = _this.responseData.userData.uid;
                        _this.dataService.username = nameUser;
                        _this.dataService.matricula = _this.responseData.userData.id_matricula;
                        _this.dataService.picture = "noavatar.png";
                        _this.menu.enable(true);
                        _this.loading.dismiss();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__inicio_inicio__["a" /* InicioPage */]);
                    });
                }
            }
        }, function (err) {
            // Error log
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.gotoforgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/login/login.html"*/'<ion-content padding>\n  <div class="center_screen">\n    <img class="logo" src="assets/images/logo-reflejo.png" alt="Logo">\n    <div class="input_area">\n      <ion-icon name="md-person"></ion-icon>\n    <input type="text" [(ngModel)]="userData.username" placeholder="Matrícula" [ngModelOptions]="{standalone: true}">\n    </div>\n    <div class="input_area">\n      <ion-icon name="md-lock"></ion-icon>\n    <input type="password" [(ngModel)]="userData.password"  placeholder="Contraseña" [ngModelOptions]="{standalone: true}">\n    </div>\n    <button ion-button full color="primary" (tap)="login()">Entrar</button>\n\n  <div class="buttonsfooter">\n\n    <div class="internofooter-izq" (tap)="gotoforgotpassword()"> <ion-icon style="font-size: xx-large !important;" name="ios-key-outline"></ion-icon> <br> ¿Olvidaste tu contraseña?</div>\n    <div class="internofooter-derecha"  (tap)="signup()"> <ion-icon style="font-size: xx-large !important;" name="ios-people-outline"></ion-icon> <br>Crear cuenta</div>\n  </div>\n\n\n   \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_google_maps_google_maps__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_connectivity_connectivity__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_actualizar_actualizar__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_get_examenes_get_examenes__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_rankingprovider_rankingprovider__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_location_location__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pagos_pagos__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_diagnostic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_subpage_subpage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_subtest_subtest__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_perfil_perfil__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_bar_code_bar_code__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_forgotpassword_forgotpassword__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_test_ubicacion_test_ubicacion__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_my_details_my_details__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_sucursalmodal_sucursalmodal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_municipios_municipios__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_colonias_colonias__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_payu_payu__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_subpage_subpage__["a" /* SubpagePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_subtest_subtest__["a" /* SubtestPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_sucursalmodal_sucursalmodal__["a" /* SucursalmodalPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_my_details_my_details__["a" /* MyDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_test_ubicacion_test_ubicacion__["a" /* TestUbicacionPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_bar_code_bar_code__["a" /* BarCodePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pagos_pagos__["a" /* PagosPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/sucursalmodal/sucursalmodal.module#SucursalmodalPageModule', name: 'SucursalmodalPage', segment: 'sucursalmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subtest/subtest.module#SubtestPageModule', name: 'SubtestPage', segment: 'subtest', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test-ubicacion/test-ubicacion.module#TestUbicacionPageModule', name: 'TestUbicacionPage', segment: 'test-ubicacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subpage/subpage.module#SubpagePageModule', name: 'SubpagePage', segment: 'subpage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bar-code/bar-code.module#BarCodePageModule', name: 'BarCodePage', segment: 'bar-code', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ranking/ranking.module#RankingPageModule', name: 'RankingPage', segment: 'ranking', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-details/my-details.module#MyDetailsPageModule', name: 'MyDetailsPage', segment: 'my-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resultado/resultado.module#ResultadoPageModule', name: 'ResultadoPage', segment: 'resultado', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resultado-ubicacion/resultado-ubicacion.module#ResultadoUbicacionPageModule', name: 'ResultadoUbicacionPage', segment: 'resultado-ubicacion', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_inicio_inicio__["a" /* InicioPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_subpage_subpage__["a" /* SubpagePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_subtest_subtest__["a" /* SubtestPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_sucursalmodal_sucursalmodal__["a" /* SucursalmodalPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_my_details_my_details__["a" /* MyDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_test_ubicacion_test_ubicacion__["a" /* TestUbicacionPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_bar_code_bar_code__["a" /* BarCodePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pagos_pagos__["a" /* PagosPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_connectivity_connectivity__["a" /* ConnectivityProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_actualizar_actualizar__["a" /* ActualizarProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_get_examenes_get_examenes__["a" /* GetExamenesProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_rankingprovider_rankingprovider__["a" /* RankingproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_35__providers_municipios_municipios__["a" /* MunicipiosProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_municipios_municipios__["a" /* MunicipiosProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_colonias_colonias__["a" /* ColoniasProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_colonias_colonias__["a" /* ColoniasProvider */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_37__providers_payu_payu__["a" /* PayuProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ranking_ranking__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bar_code_bar_code__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pagos_pagos__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_actualizar_actualizar__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_get_examenes_get_examenes__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_gettematicas_gettematicas__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(tematicas, platform, dataService, menu, statusBar, splashScreen, actualizarService, examenesProvider, alertCtrl, loadingCtrl, storage) {
        var _this = this;
        this.tematicas = tematicas;
        this.platform = platform;
        this.dataService = dataService;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.actualizarService = actualizarService;
        this.examenesProvider = examenesProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.rootPage = 'LoginPage';
        this.userloggued = [];
        this.showAnonimo = false;
        this.showAvatar = true;
        this.avatarDefault = true;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.userloggued = {
                'name': _this.dataService.username
            };
        });
        this.user = {
            "id": this.dataService.iduser,
            "name": this.dataService.username,
            "avatar": this.dataService.picture
        };
    }
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_inicio_inicio__["a" /* InicioPage */]);
    };
    MyApp.prototype.goToPerfil = function (params) {
        if (!params)
            params = {};
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */]);
    };
    MyApp.prototype.goToCuenta = function (params) {
        if (!params)
            params = {};
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_ranking_ranking__["a" /* RankingPage */]);
    };
    MyApp.prototype.goToLector = function (params) {
        if (!params)
            params = {};
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_bar_code_bar_code__["a" /* BarCodePage */]);
    };
    MyApp.prototype.goToPagos = function (params) {
        if (!params)
            params = {};
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_pagos_pagos__["a" /* PagosPage */]);
    };
    MyApp.prototype.goToNotifis = function (params) {
        if (!params)
            params = {};
    };
    MyApp.prototype.goToTerms = function (params) {
        if (!params)
            params = {};
    };
    MyApp.prototype.openPage = function (page) {
    };
    MyApp.prototype.actualizar = function () {
        var _this = this;
        this.storage.clear();
        var indices = [];
        var indicesHech = [];
        var responseData = [];
        this.loading = this.loadingCtrl.create({
            content: 'Conectando con el servidor...'
        });
        this.loading.present();
        this.sendData = {
            "userid": this.dataService.iduser
        };
        //console.log("string: " +preguntasString);
        this.tematicas.postData(this.sendData, "getexameneshechos").then(function (result) {
            var response1 = result;
            var size = Object.keys(response1).length;
            for (var i = 0; i < size; i++) {
                _this.indicehechos = {
                    "id": response1[i].test_id,
                    "promedio": response1[i].promedio,
                    "nombre": response1[i].nombre
                };
                indicesHech.push(_this.indicehechos);
            }
            console.log(indicesHech);
            _this.dataService.setExamen(indicesHech, "exameneshechos");
        });
        this.examenesProvider.postData('', '').then(function (result) {
            responseData = result;
            var size = Object.keys(responseData).length;
            console.log(size);
            console.log(responseData);
            for (var i = 0; i < size; i++) {
                var nameEx = void 0;
                nameEx = "examen" + responseData[i].id;
                _this.dataService.setExamen(responseData[i].respuestas, nameEx);
                _this.indice = {
                    "id": responseData[i].id,
                    "nombre": responseData[i].nombre,
                    "sub": responseData[i].sub
                };
                indices.push(_this.indice);
            }
            console.log(indices);
            _this.dataService.setExamen(indices, "indice");
            if (responseData[0].id > 1) {
                _this.loading.dismiss();
                var alert_1 = _this.alertCtrl.create({
                    title: '¡Listo!',
                    subTitle: 'Datos descargados correctamente.',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }, function (err) {
            // Error log
        });
    };
    MyApp.prototype.logout = function () {
        this.menu.close();
        this.menu.enable(false);
        this.dataService.salirData();
        this.nav.push('LoginPage');
        this.dataService.fbid = null;
        this.dataService.username = null;
        this.dataService.picture = null;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-content id="side-menu21">\n  <div style="background-color: #f3f3f4;\n    padding-bottom: 20px;\n    border-bottom-style: solid;\n    border-bottom-color: #eaebea;">\n    <div class="spacer" style="width:268px;height:33px;" id="menu-spacer1"></div>\n    <div *ngIf="!avatarDefault"  class="profile-image">\n      <img src="assets/images/{{this.dataService.picture}}" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    <div *ngIf="avatarDefault" >\n      <img src="assets/images/avatar-default.png" style="display:block;width:40%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div>\n    \n    <h3 id="menu-heading1" style="color: #ce181e;\n    font-weight: 400;text-align:center;">\n      {{this.dataService.username}}\n    </h3>\n    </div>\n    <div class="spacer" style="width:268px;height:18px;" id="menu-spacer2"></div>\n    <ion-list style="opacity: 0.5;\n   color: grey;" id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item1">\n        <ion-icon name="ios-home-outline" item-left></ion-icon>\n        Inicio\n      </ion-item>\n      <ion-item color="none" menuClose="" (click)="goToPerfil()" id="menu-list-item2">\n        <ion-icon name="ios-contact-outline" item-left></ion-icon>\n        Perfil\n      </ion-item>\n      <ion-item color="none" menuClose="" (click)="goToLector()" id="menu-list-item2">\n       <ion-icon name="qr-scanner" item-left></ion-icon>\n       Lector QR\n      </ion-item>\n      <ion-item color="none" menuClose="" (click)="goToPagos()" id="menu-list-item2">\n        <ion-icon name="ios-cash-outline" item-left></ion-icon>\n       Pagos\n      </ion-item>\n      \n      <hr>\n      <ion-item color="none" menuClose="" (click)="logout()"  id="menu-list-item5">\n        <ion-icon name="log-out" item-left></ion-icon>\n        Salir\n      </ion-item>\n      \n    </ion-list>\n    \n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_actualizar_actualizar__["a" /* ActualizarProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_get_examenes_get_examenes__["a" /* GetExamenesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RankingproviderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RankingproviderProvider = (function () {
    function RankingproviderProvider(http) {
        this.http = http;
        console.log('Hello RankingproviderProvider Provider');
    }
    return RankingproviderProvider;
}());
RankingproviderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RankingproviderProvider);

//# sourceMappingURL=rankingprovider.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_actualizar_actualizar__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subpage_subpage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagos_pagos__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bar_code_bar_code__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var InicioPage = (function () {
    function InicioPage(alertCtrl, tematicas, navCtrl, navParams, menuCtrl, loadingCtrl, modalCtrl, actualizar, dataService, iab) {
        this.alertCtrl = alertCtrl;
        this.tematicas = tematicas;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.actualizar = actualizar;
        this.dataService = dataService;
        this.iab = iab;
        this.examenes = [];
        this.inicios = 'https://www.ivei.mx/inicios_35.html';
        this.sendData = {
            "userid": this.dataService.iduser
        };
        this.menuCtrl.enable(true);
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    InicioPage.prototype.logout = function () {
        this.menuCtrl.close();
        this.menuCtrl.enable(false);
        this.dataService.salirData();
        this.navCtrl.push('LoginPage');
        this.dataService.fbid = null;
        this.dataService.username = null;
        this.dataService.picture = null;
    };
    InicioPage.prototype.goToSub = function (id) {
        if (id == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */], {
                idsub: id
            });
        }
        else if (id == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subpage_subpage__["a" /* SubpagePage */], {
                idsub: id
            });
        }
        else if (id == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__subpage_subpage__["a" /* SubpagePage */], {
                idsub: 666
            });
        }
        else if (id == 3) {
            this.logout();
        }
        else if (id == 5) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pagos_pagos__["a" /* PagosPage */], {});
        }
        else if (id == 6) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__bar_code_bar_code__["a" /* BarCodePage */], {});
        }
    };
    InicioPage.prototype.openLink = function (www) {
        var browser = this.iab.create(www, '_system');
    };
    return InicioPage;
}());
InicioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inicio',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/inicio/inicio.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary" hideBackButton="true">\n  \n      <button menuToggle ion-button icon-only (tap)="openMenu()">\n        <ion-icon color="primary" name="options"></ion-icon>\n      </button>\n   \n\n    <ion-title style="text-align: center;">\n       Bienvenido {{this.dataService.username}}\n    </ion-title>\n\n   \n\n    <ion-buttons end>\n      <button ion-button icon-only>\n       <img style="    width: 50%;" src="assets/images/logomapa.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-grid>\n\n  <ion-row>\n    <ion-col class="rojo" (tap)="goToSub(1)">\n      <table style="margin: 0 auto;" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/test1.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #ef4b23;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Test</td>\n          </tr>\n        </table>\n\n </ion-col>\n\n     <ion-col class="rojo" (tap)="goToSub(2)">\n\n       <table style="margin: 0 auto; width: 90px" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/ubicacion.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #6cb640;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Examen de ubicación</td>\n          </tr>\n        </table>\n    </ion-col>\n   </ion-row>\n\n\n\n    <ion-row>\n      <ion-col class="rojo" (click)="openLink(this.inicios)">\n      <table style="margin: 0 auto;" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/inicios.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #8561ab;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Inicios</td>\n          </tr>\n        </table>\n\n </ion-col>\n\n    \n\n     \n      <ion-col class="rojo" (tap)="goToSub(4)">\n\n       <table style="margin: 0 auto; width: 90px" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/planteles1.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #00b5ca;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Planteles</td>\n          </tr>\n        </table>\n    </ion-col>\n   </ion-row>\n\n\n    <ion-row>\n      <ion-col class="rojo" (tap)="goToSub(6)">\n      <table style="margin: 0 auto;" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/qr1.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #feba11;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Códigos QR</td>\n          </tr>\n        </table>\n\n </ion-col>\n\n      <ion-col class="rojo" (tap)="goToSub(5)">\n\n       <table style="margin: 0 auto; width: 90px" cellspacing="0" cellpadding="0">\n          <tr>\n            <td style="background-image: url(assets/images/icons/ecuenta1.png);\n    background-size: cover;\n    width: 90px;height: 90px;"></td>\n          </tr>\n          <tr>\n            <td style="color: #eb037b;\n    background-image: url(assets/images/icons/bottom.png);\n    background-size: cover;\n    height: 50px;\n    font-size: 1.2em;">Estado de cuenta</td>\n          </tr>\n        </table>\n    </ion-col>\n   </ion-row>\n  \n\n</ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/inicio/inicio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_actualizar_actualizar__["a" /* ActualizarProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], InicioPage);

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gettematicas_gettematicas__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_payu_payu__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(45);
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
 * Generated class for the PagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PagosPage = (function () {
    function PagosPage(navCtrl, navParams, tematicas, dataService, formBuilder, payup, iab, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tematicas = tematicas;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.payup = payup;
        this.iab = iab;
        this.loadingCtrl = loadingCtrl;
        //this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
        this.user = {
            'iduser': this.dataService.matricula
        };
        this.tematicas.postData(this.user, "listpagos").then(function (details) {
            console.log(details);
            _this.list = details;
        });
        this.myDetailsForm = formBuilder.group({
            CantidadForm: [''],
            matriculaForm: [this.dataService.matricula]
        });
    }
    // remove product qty
    PagosPage.prototype.removeItem = function (item) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i] == item) {
                this.list.splice(i, 1);
            }
        }
    };
    PagosPage.prototype.sendPayment = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Creando orden de pago...'
        });
        this.loading.present();
        var data = this.myDetailsForm.value;
        console.log(data['CantidadForm']);
        console.log(data['matriculaForm']);
        var datSend = "idUserPagar=" + data['matriculaForm'] + "&amountFormMonth=" + data['CantidadForm'];
        this.payup.getData(datSend).then(function (details) {
            console.log(details);
            var www = "https://www.ivei.mx/redireccionar-pago.php?id=" + details[0].indice;
            _this.loading.dismiss();
            var browser = _this.iab.create(www, '_system');
        });
    };
    //goTo function
    PagosPage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    return PagosPage;
}());
PagosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pagos',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/pagos/pagos.html"*/'<!--\n  Generated template for the PagosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="morado">\n    <ion-title>Estado de cuenta</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n       <img style="    width: 50%;" src="assets/images/logomapa-white.png">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-card>\n\n		<ion-grid>\n\n  <ion-row>\n    <ion-col class="rojo" style="background-color: #ce006d;">\n    <img src="assets/images/pig.png">\n      <div style="padding-top: 5% !important">Mis pagos</div>\n    </ion-col>\n   </ion-row>\n\n</ion-grid>\n<hr>\n\n		<ion-card-content>\n		Aquí podrás ver la información de tus pagos, y realizar nuevos pagos a tu mensualidad.\n		</ion-card-content>\n\n\n	</ion-card>	\n<ion-card>\n\n		<ion-grid>\n\n  <ion-row>\n    <ion-col class="rojo" style="background-color: #ce006d; padding: 22px 10px 10px 0px !important;">\n  \n      <div style="padding-top: 5% !important;\n    padding-left: 5px;\n    width: 100%;\n    text-align: left;">Cantidad a pagar</div>\n    </ion-col>\n   </ion-row>\n\n</ion-grid>\n<hr>\n	<ion-list no-lines>\n		<form [formGroup]="myDetailsForm" >\n		\n		<ion-item>\n			\n			<ion-input formControlName="CantidadForm" type="text" placeholder="00.00 MXN"></ion-input>\n		</ion-item>\n		\n\n		<ion-item style="display: none">\n			\n			<ion-input style="display: none" formControlName="matriculaForm" type="hidden"></ion-input>\n		</ion-item>\n\n<button (tap)="sendPayment()"  color="morado" ion-button round>Pagar</button>\n\n		\n</form>\n\n	</ion-list>\n</ion-card>\n\n<ion-card>\n\n		<ion-grid>\n\n  <ion-row>\n    <ion-col class="rojo" style="background-color: #bc0063; padding: 22px 10px 10px 0px !important;">\n  \n      <div style="padding-top: 5% !important;\n    padding-left: 5px;\n    width: 100%;\n    text-align: left;">Historial de pagos</div>\n    </ion-col>\n   </ion-row>\n\n</ion-grid>\n<hr>\n <ion-list style="text-align: -webkit-center;" class="main-list">\n    <ion-item style="    width: 50%;" class="list-item" *ngFor="let item of list" no-lines>\n      <ion-avatar  item-start>\n        <ion-icon style="color: green;" name="checkmark-circle"></ion-icon>\n       \n      </ion-avatar>\n      <div class="card-det">\n        <h4 style="color: black;"  no-margin>${{item.totalPaymentAmount}} MXN</h4>\n        <p style="font-weight: 700;" no-margin>{{item.date_payment}}</p>\n        \n        \n      </div>\n    </ion-item>\n  </ion-list>\n\n\n</ion-card>\n \n</ion-content>'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/pagos/pagos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gettematicas_gettematicas__["a" /* GettematicasProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_payu_payu__["a" /* PayuProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], PagosPage);

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(45);
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
 * Generated class for the BarCodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarCodePage = (function () {
    function BarCodePage(navCtrl, navParams, barcodeScanner, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.iab = iab;
        this.isFound = false;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // Success! Barcode data is here
            var myJSON = JSON.stringify(barcodeData);
            _this.URLCode = barcodeData['text'];
            _this.FormatCode = barcodeData['format'];
            _this.isFound = true;
        }, function (err) {
            // An error occurred
            console.log(err);
        });
    }
    BarCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarCodePage');
    };
    BarCodePage.prototype.openWeb = function (www) {
        var browser = this.iab.create(www, '_system');
    };
    return BarCodePage;
}());
BarCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bar-code',template:/*ion-inline-start:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/bar-code/bar-code.html"*/'<!--\n  Generated template for the BarCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Lector QR</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="margin-top: 50px" padding>\n	<h2 *ngIf="isFound"><ion-icon style="color: green;" name="checkmark-circle"></ion-icon> Url encontrada</h2>\n	<h2 *ngIf="!isFound"><ion-icon style="color: red;" name="alert"></ion-icon> Url No encontrada</h2>\n	<p>{{URLCode}}</p>\n	<button *ngIf="isFound" (tap)="openWeb(this.URLCode)" style="margin-top: 10px" ion-button round>Abrir sitio web</button>\n\n</ion-content>'/*ion-inline-end:"/Users/Atalusmac/Documents/work/clientes/Dase IVEI/app/ivei/src/pages/bar-code/bar-code.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], BarCodePage);

//# sourceMappingURL=bar-code.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://www.datalus.mx/projects/cam/appmobile/api/update-tests.php';
var ActualizarProvider = (function () {
    function ActualizarProvider(http) {
        this.http = http;
        console.log('Hello ActualizarProvider Provider');
    }
    ActualizarProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return ActualizarProvider;
}());
ActualizarProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ActualizarProvider);

//# sourceMappingURL=actualizar.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'https://www.datalus.mx/projects/ivei/apitest/';
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map