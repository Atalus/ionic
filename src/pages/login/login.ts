import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, MenuController, AlertController,LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { InicioPage } from '../inicio/inicio';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	loading: any;
	responseData : any;
  userData = {"password": "", "username": ""};
  showError: boolean = false;
  error: any = "";
  size: any;

  constructor(public tematicas: GettematicasProvider, public navCtrl: NavController, public authService: AuthServiceProvider, public platform: Platform, public menu: MenuController, public dataService: DataProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  //this.navCtrl.push(TinderPage);
  this.loading = this.loadingCtrl.create({
      content: 'Ingresando...'
    });
    this.menu.enable(false);
  
  }

  

   login() {
   	this.loading = this.loadingCtrl.create({
      content: 'Accediendo...'
    });
   	this.loading.present();
    console.log(this.userData);
     this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      console.log(this.responseData.error);

      if(this.responseData.error == 1){
  this.showError = true;
  this.error = this.responseData.msg;
  this.loading.dismiss();
 
} else {

   if(!isNaN(parseInt(this.responseData.userData.uid))){

   	let sucArray = [];
    
    this.tematicas.postData("","sucursales").then((result) => {
     
    	let response1 = result;
    	this.size = Object.keys(response1).length;
    	 for(let i = 0; i < this.size; i++){
sucArray.push(response1[i].esc_desc);
       

       }
       console.log(result);
      console.log("succcc" + sucArray);

       this.dataService.sucursales = sucArray;

       localStorage.setItem('userData', JSON.stringify(this.responseData));
 let nameUser = this.responseData.userData.first_name;
 nameUser = nameUser + this.responseData.userData.last_name;
      this.dataService.fbid = null;
        this.dataService.iduser = this.responseData.userData.uid;
       this.dataService.username = nameUser;
       this.dataService.matricula = this.responseData.userData.id_matricula;
       this.dataService.picture = "noavatar.png";

        this.menu.enable(true);
        this.loading.dismiss();
       this.navCtrl.setRoot(InicioPage);
   });
      }

}
  
    }, (err) => {
      // Error log
    });
 
  }


  


  
signup(): void{
	this.navCtrl.push(SignupPage);
}

  gotoforgotpassword(){
    this.navCtrl.push(ForgotpasswordPage)
  }

  

  ionViewDidLoad() {
  	
    console.log('ionViewDidLoad LoginPage');
  }

}
