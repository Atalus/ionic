import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, MenuController, LoadingController, AlertController} from 'ionic-angular';
import { ActualizarProvider } from '../../providers/actualizar/actualizar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataProvider } from '../../providers/data/data';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { LocationPage } from '../location/location';
import { SubpagePage } from '../subpage/subpage';
import { PagosPage } from '../pagos/pagos';
import { BarCodePage } from '../bar-code/bar-code';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  examenes: any = [];
  sendData: any;
  size: any;
  inicios: any = 'https://www.ivei.mx/inicios_35.html';
  constructor(public alertCtrl: AlertController, public tematicas: GettematicasProvider, public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,public loadingCtrl: LoadingController, public modalCtrl: ModalController, public actualizar: ActualizarProvider,public dataService: DataProvider, public iab: InAppBrowser){
  
  this.sendData = {
            "userid": this.dataService.iduser
          }
   this.menuCtrl.enable(true);

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

openMenu(): void {
    this.menuCtrl.open();
  }

  logout(): void {

    this.menuCtrl.close();
    this.menuCtrl.enable(false);
    this.dataService.salirData();

    this.navCtrl.push('LoginPage');

    this.dataService.fbid = null;
    this.dataService.username = null;
    this.dataService.picture = null;

   

  }

  goToSub(id): void {

    if(id == 4){
      this.navCtrl.push(LocationPage, {
    idsub: id
});
    } else if(id == 1){
      this.navCtrl.push(SubpagePage, {
    idsub: id
});
    } else if(id == 2){
      this.navCtrl.push(SubpagePage, {
    idsub: 666
});
    } else if(id == 3){
    	this.logout();
    } else if(id == 5){
      this.navCtrl.push(PagosPage, {});
    } else if(id == 6){
      this.navCtrl.push(BarCodePage, {});
    } 
    
  }

  openLink(www){
  let browser = this.iab.create(www, '_system');
}

}
