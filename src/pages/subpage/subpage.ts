import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubtestPage } from '../subtest/subtest';
import { TestUbicacionPage } from '../test-ubicacion/test-ubicacion';
/**
 * Generated class for the SubpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subpage',
  templateUrl: 'subpage.html',
})
export class SubpagePage {
  showTests: boolean = false;
  showTestsIngles: boolean = false;
  idSub: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idSub = this.navParams.get('idsub');

    if(this.idSub == 666){
      this.showTestsIngles = true;
    } else {
      this.showTests = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubpagePage');
  }

goToSub(id): void {

let title= "";
if(id == 5){
 title = "Computación";
} else if(id == 6){
   title = "Idiomas";
} if(id == 7){
   title = "Preparatoria";
}


  if(id === 666){
    this.navCtrl.push(TestUbicacionPage, { 
    doexamen: "yes" });
  } else {
    this.navCtrl.push(SubtestPage, {
    idsub: id,
    title: title
});
  }
	 
    
  }

}
