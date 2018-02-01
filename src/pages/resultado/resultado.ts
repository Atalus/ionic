import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InicioPage } from '../inicio/inicio';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the ResultadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
		resultadosTest: any;
  examenData: any;
  nombreExamen: string;
  size: number;
  finalizar: number;
  correctas: number;
  erroneas: number;
  resultado: any = "cargando";
  restante: any;
  sendData: any;
  idtest: number;
  sizeTest: number;
  responseData: any;
  showImg: boolean = false;
  showImg2: boolean = false;
  showErrors: boolean = false;
  loading: any;
  cali: any;
  colorcali: any;
  clascali: any;
  
  textcali: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public iab: InAppBrowser, public plt: Platform, public loadingCtrl: LoadingController,public tematicas: GettematicasProvider,public dataService: DataProvider) {
  
  		this.loading = this.loadingCtrl.create({
      content: 'Estamos obteniendo tu calificación...'
    });
this.loading.present();
    this.resultadosTest = this.navParams.get('resultados');
    this.examenData = eval(this.navParams.get('examenData'));
    this.nombreExamen = this.navParams.get('nameTest');
    this.correctas = this.navParams.get('correctas');
    this.sizeTest = this.navParams.get('sizeTest');

console.log("correctas: ", this.correctas);
  console.log("sizeTest: ", this.sizeTest); 
  
     this.size = Object.keys(this.examenData).length;
      this.finalizar = this.size - 1;
    console.log("resultado: "+ this.resultadosTest);
    console.log(this.examenData);
    this.calcular();
console.log("userid: " + this.dataService.iduser);

 plt.registerBackButtonAction(() => {
      this.navCtrl.push('InicioPage');
        
      });

  }


openLink(www){
  let browser = this.iab.create(www, '_system');
}

recorrerTest() {
this.correctas = 0;
this.erroneas = 0;
let preguntasString;
  for(let i = 0; i < this.size; i++){
        if(this.examenData[i].respuesta == this.resultadosTest[i]){
          this.correctas++;
          console.log(i + "correcta");
        } else {
          if(this.erroneas == 0){
            preguntasString = this.examenData[i].id_pregunta;
          } else {
             preguntasString = preguntasString + ", " + this.examenData[i].id_pregunta;
          }
         
          this.erroneas++;
        }

       }
       this.sendData = {
            "testidenviar": this.idtest,
            "idquestion": preguntasString,
            "userid": this.dataService.iduser
          }
          //console.log("string: " +preguntasString);
     
       this.resultado = this.correctas / this.size;
       this.resultado = this.resultado * 100;
       this.resultado = this.resultado.toFixed(0);
       if(this.resultado < 59){
        this.colorcali = "orange";
       }
       console.log("total correctas: " + this.correctas);
       console.log("resultado: " + this.resultado);
       this.loading.dismiss();




   

   }

   calcular(){
    this.resultado = this.correctas / this.size;
       this.resultado = this.resultado * 100;
       this.resultado = this.resultado.toFixed(0);
       if(this.resultado < 59){
        this.colorcali = "orange";
       }
       console.log("total correctas: " + this.correctas);
       console.log("resultado: " + this.resultado);
       this.loading.dismiss();
   }

   backMenu() {
    this.navCtrl.push(InicioPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoPage');
  }

}
