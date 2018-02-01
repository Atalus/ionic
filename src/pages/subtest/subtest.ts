import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the SubtestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subtest',
  templateUrl: 'subtest.html',
})
export class SubtestPage {

 idSub: number;
	examenes: any = [];
	examen: any = [];
	indices: any = [];
  title: string;
  keys: any;
  sendData: any;
  isFlag: boolean = false;
  isPrep: boolean = false;
  isComp: boolean = false;
  cachnum: number;

  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams, public tematicas: GettematicasProvider) {
  this.idSub = this.navParams.get('idsub');
  this.title = this.navParams.get('title');

  console.log("categoria: " + this.idSub);

  if(Number(this.idSub) == 6){
    this.isFlag = true;
  } else if(Number(this.idSub) == 7 || Number(this.idSub) == 23){
    this.isPrep = true;
  } else if(Number(this.idSub) == 5){
    this.isComp = true;
  }



  if(Number(this.idSub) == 23){
      this.sendData = {
    "idexamen": this.idSub
  }
  
this.tematicas.postData(this.sendData,'getcolbach').then((result) => {
      this.indices = result;
      var size = Object.keys(this.examenes).length;
   
       
     
    });
  } else {
    
  this.sendData = {
    "idexamen": this.idSub
  }
  
this.tematicas.postData(this.sendData,'getexamenessub').then((result) => {
      console.log(result);
      this.indices = result;
      var size = Object.keys(this.examenes).length;
     
       
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubpagePage');
  }

   goToSub(id): void {
this.cachnum = id;
let chnmm = id;
    if(chnmm.id == 23){
      console.log("subtest");
        this.navCtrl.push(SubtestPage, {
    idsub: 23,
    title: "COLBACH"
});
    } else {
      console.log("test");
      this.navCtrl.push('TestPage', {
    idtest: id.id,
    nametest: id.nombre,
    doexamen: "yes"
});
    }
    


  }

}
