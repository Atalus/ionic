import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';

/**
 * Generated class for the MyDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-details',
  templateUrl: 'my-details.html',
})
export class MyDetailsPage {

 myDetailsForm: FormGroup;
  user: any;
  response: any;
  sendData: any;
  formControls: any;
  sufijo: string = "Dr.";

  constructor(public navCtrl: NavController,public platform: Platform, public formBuilder: FormBuilder, public dataService: DataProvider, public tematicas: GettematicasProvider) {

  	this.myDetailsForm = formBuilder.group({
      prefijoForm: ['1'],
  		nameForm: [''],
  		lastNameForm: [''],
  		mailForm: [''],
  		passForm: ['']
  	});

  }

  ionViewDidLoad(){

  	this.platform.ready().then(() => {
      this.user = {
        'iduser': this.dataService.iduser
      }
  		this.tematicas.postData(this.user,"getuser").then((details) => {
        console.log(details);

  			this.response = details;

  			this.formControls = this.myDetailsForm.controls;
          this.formControls.prefijoForm.setValue(this.response.userData.sufijo);
  				this.formControls.nameForm.setValue(this.response.userData.first_name);
  				this.formControls.lastNameForm.setValue(this.response.userData.last_name);
  				this.formControls.mailForm.setValue(this.response.userData.email);
  				//formControls.passForm.setValue(this.response.userData.passForm);

  		});
  	});
  }



  saveForm(): void{
   /* this.sendData = {
      "iduser": this.dataService.iduser,
      "sufijo": this.formControls.prefijoForm.getValue(),
      "first_name": this.formControls.nameForm.getValue(),
      "last_name": this.formControls.lastNameForm.getValue(),
      "email": this.formControls.mailForm.getValue()
    }
    console.log(this.sendData);*/
  	let data = this.myDetailsForm.value;
    console.log(data);
  	this.dataService.setMyDetails(data);

  }

}
