import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { DataProvider } from '../../providers/data/data';
import { PayuProvider } from '../../providers/payu/payu';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the PagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {

	 myDetailsForm: FormGroup;
 list: any;
 user: any;
 loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tematicas: GettematicasProvider,public dataService: DataProvider, public formBuilder: FormBuilder, public payup: PayuProvider, public iab: InAppBrowser, public loadingCtrl: LoadingController) {
    //this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
  	 this.user = {
        'iduser': this.dataService.matricula
      }
  		this.tematicas.postData(this.user,"listpagos").then((details) => {
        console.log(details);

  			this.list = details;

  		

  		});

  		this.myDetailsForm = formBuilder.group({
  		CantidadForm: [''],
  		matriculaForm: [this.dataService.matricula]
  	});
  }

// remove product qty
  removeItem(item){
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i] == item){
        this.list.splice(i, 1);
      }
 
    }
  }

sendPayment(){
  this.loading = this.loadingCtrl.create({
      content: 'Creando orden de pago...'
    });
    this.loading.present();
	 	let data = this.myDetailsForm.value;
    console.log(data['CantidadForm']);
    console.log(data['matriculaForm']);

    let datSend = "idUserPagar=" + data['matriculaForm'] + "&amountFormMonth=" + data['CantidadForm'];
	 	this.payup.getData(datSend).then((details) => {
        console.log(details);
   

   let www = "https://www.ivei.mx/redireccionar-pago.php?id=" + details[0].indice;
    this.loading.dismiss();
   let browser = this.iab.create(www, '_system');

  		});
}


//goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

}
