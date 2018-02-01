import { Component, ViewChild } from '@angular/core';
import { Nav,Platform, MenuController,Events, AlertController,LoadingController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { InicioPage } from '../pages/inicio/inicio';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { RankingPage } from '../pages/ranking/ranking';
import { PerfilPage } from '../pages/perfil/perfil';
import { LocationPage } from '../pages/location/location';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarCodePage } from '../pages/bar-code/bar-code';
import { PagosPage } from '../pages/pagos/pagos';
import { SubpagePage } from '../pages/subpage/subpage';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ActualizarProvider } from '../providers/actualizar/actualizar';
import { GetExamenesProvider } from '../providers/get-examenes/get-examenes';
import { Storage } from '@ionic/storage';
import { GettematicasProvider } from '../providers/gettematicas/gettematicas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'LoginPage';
  userloggued: any = [];
 
  indice: any;
  indicehechos: any;
 
  mostrar : any;
  loading: any;
  user: any;
  sendData: any;
  showAnonimo: boolean = false;
  showAvatar: boolean = true;
  avatarDefault: boolean = true;
  avatDB: any;

  constructor(public tematicas: GettematicasProvider, public platform: Platform, public dataService : DataProvider, public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen,public actualizarService: ActualizarProvider, public examenesProvider: GetExamenesProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController,public storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.userloggued = {
    'name': this.dataService.username
   }
     
    });


  

    this.user = {
      "id": this.dataService.iduser,
      "name": this.dataService.username,
      "avatar": this.dataService.picture
    }

  }

  goToHome(params){
    if (!params) params = {};
    this.nav.setRoot(InicioPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.nav.push(PerfilPage);
  }goToCuenta(params){
    if (!params) params = {};
    this.nav.push(RankingPage);
  }goToLector(params){
    if (!params) params = {};
    this.nav.push(BarCodePage);
  }goToPagos(params){
    if (!params) params = {};
    this.nav.push(PagosPage);
  }goToNotifis(params){
    if (!params) params = {};
   
  }goToTerms(params){
    if (!params) params = {};
   
  }

  

  openPage(page): void{

  }

  actualizar(): void{
     this.storage.clear();
     let indices: any = [];
     let indicesHech: any = [];
     let responseData: any = [];
  
    this.loading = this.loadingCtrl.create({
      content: 'Conectando con el servidor...'
    });
this.loading.present();

 this.sendData = {
            "userid": this.dataService.iduser
          }
          //console.log("string: " +preguntasString);
       this.tematicas.postData(this.sendData,"getexameneshechos").then((result) => {
       
         let response1 = result;
      var size = Object.keys(response1).length;
    
      for(let i = 0; i < size; i++){ 
           this.indicehechos = {
            "id": response1[i].test_id,
            "promedio": response1[i].promedio,
            "nombre": response1[i].nombre
          };

          indicesHech.push(this.indicehechos);

      }
      console.log(indicesHech);
      this.dataService.setExamen(indicesHech,"exameneshechos");

       });

    this.examenesProvider.postData('','').then((result) => {
      responseData = result;
      var size = Object.keys(responseData).length;
      console.log(size);
      console.log(responseData);
      for(let i = 0; i < size; i++){ 
        let nameEx;
        nameEx = "examen"+responseData[i].id;

          this.dataService.setExamen(responseData[i].respuestas,nameEx);
          this.indice = {
            "id": responseData[i].id,
            "nombre": responseData[i].nombre,
            "sub": responseData[i].sub
          };

          indices.push(this.indice);

      }
      console.log(indices);
     this.dataService.setExamen(indices,"indice");
      

      if(responseData[0].id > 1){
        this.loading.dismiss();
   let alert = this.alertCtrl.create({
        title: '¡Listo!',
        subTitle: 'Datos descargados correctamente.',
        buttons: ['Ok']
      });
      
      alert.present();
 
} 
  
    }, (err) => {
      // Error log
    });
  }

  logout(): void {

    this.menu.close();
    this.menu.enable(false);
    this.dataService.salirData();

    this.nav.push('LoginPage');

    this.dataService.fbid = null;
    this.dataService.username = null;
    this.dataService.picture = null;

   

  }
}

