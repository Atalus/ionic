import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MunicipiosProvider } from '../../providers/municipios/municipios';
import { ColoniasProvider } from '../../providers/colonias/colonias';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  showError: boolean = false;
  showMunicipio: boolean = false;
  showColonia: boolean= false;
  error: any;
  municipios: any;
  colonias: any;
  loading: any;
  myDetailsForm: FormGroup;
  size: any;

  constructor(public tematicas: GettematicasProvider, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public municipiosProv: MunicipiosProvider, public coloniasProv: ColoniasProvider, public navCtrl: NavController, public authService:AuthServiceProvider, public dataService: DataProvider, public menu: MenuController) {
  	
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

   signup(){
this.loading = this.loadingCtrl.create({
      content: 'Accediendo...'
    });
   	this.loading.present();
   	let data = this.myDetailsForm.value;
    console.log(data);

     this.authService.postData(data,'signup').then((result) => {
      this.responseData = result;
      

      console.log(this.responseData);

    
      


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

      

       this.dataService.sucursales = sucArray;

       localStorage.setItem('userData', JSON.stringify(this.responseData));
 let nameUser = this.responseData.userData.first_name;
 nameUser = nameUser + this.responseData.userData.last_name;
      this.dataService.fbid = null;
        this.dataService.iduser = this.responseData.userData.uid;
       this.dataService.username = nameUser;
       this.dataService.matricula = this.responseData.userData.id_matricula;
       this.dataService.picture = "assets/images/noavatar.png";

        this.menu.enable(true);
        this.loading.dismiss();
       this.navCtrl.push(InicioPage);
   });
      }

}


      
      
    }, (err) => {
      // Error log
    });

  }

  login(){
    this.navCtrl.push(LoginPage);
  }

   onSelectEstadoChange(selectedValue: any) {
   	this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
   	this.loading.present();
    console.log('Selected', selectedValue);
    
    
    this.municipiosProv.getData(selectedValue).then((result) => {
     console.log(result);
        this.municipios = result;
       
       this.showMunicipio = true;
      this.loading.dismiss();
      });
  }

  onSelectMunicipioChange(selectedValue: any) {
   	this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
   	this.loading.present();
    console.log('Selected', selectedValue);
    
    
    this.coloniasProv.getData(selectedValue).then((result) => {
     console.log(result);
        this.colonias = result;
       
       this.showColonia = true;
      this.loading.dismiss();
      });
  }

  onSelectColoniaChange(selectedValue: any) {
   	this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
   	this.loading.present();
    console.log('Selected', selectedValue);
    this.showColonia = false;
    let formControls: any = this.myDetailsForm.controls;
    formControls.cpForm.setValue(selectedValue);
    
    this.loading.dismiss();
  }

}
