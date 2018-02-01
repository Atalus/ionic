import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { DataProvider } from '../../providers/data/data';
import { MyDetailsPage } from '../my-details/my-details';
/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  	ranking: any;
	sendData: any;
	responseData: any;
	user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tematicas: GettematicasProvider,public dataService: DataProvider) {
 	this.user = {
  		"id": this.dataService.iduser,
  		"name": this.dataService.username,
  		"avatar": this.dataService.picture
  	}

  	/*this.dataService.getExamenesHechos().then((result) => {

  		this.responseData = eval(result);
  		    var size = Object.keys(this.responseData).length;
      for(let i = 0; i < size; i++){ 
           
         console.log();

      }
  		
  	});*/

  }

  goToDetails(){
  	  this.navCtrl.push(MyDetailsPage);
  }


}
