import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { InicioPage } from '../inicio/inicio';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ResultadoUbicacionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-ubicacion',
  templateUrl: 'resultado-ubicacion.html',
})
export class ResultadoUbicacionPage {

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
  responseData: any;
  showImg: boolean = false;
  showImg2: boolean = false;
  showErrors: boolean = false;
  loading: any;
  cali: any;
  colorcali: any;
  clascali: any;
  
  textcali: string;
  nivel: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public iab: InAppBrowser, public plt: Platform, public loadingCtrl: LoadingController,public tematicas: GettematicasProvider,public dataService: DataProvider) {
  
  		this.loading = this.loadingCtrl.create({
      content: 'Estamos obteniendo tu calificación...'
    });
this.loading.present();
    this.resultadosTest = this.navParams.get('resultados');
    this.examenData = eval(this.navParams.get('examenData'));
    this.nombreExamen = this.navParams.get('nameTest');

    this.idtest = this.navParams.get('idtest');
    this.nivel = this.navParams.get('nivel');
     this.size = Object.keys(this.examenData).length;
      this.finalizar = this.size - 1;
  	console.log("resultados: "+ this.resultadosTest);
    console.log(this.examenData);
    this.recorrerTest();
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
        if("select"+this.examenData[i].respuesta == this.resultadosTest[i]){
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




       if(this.resultado != 100){
        this.showErrors = true;
         this.tematicas.postData(this.sendData,"gettematicaubicacion").then((result) => {
            //console.log(result);
            this.responseData = result;
            console.log(this.responseData[0].tematica);
            console.log(this.responseData[0].www);
            console.log(this.responseData[0].id_pregunta);
          });
}

let newData2Send = {
    "idtest": this.idtest,
    "promedio": this.resultado,
    "iduser": this.dataService.iduser
   }
   
   

   }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoUbicacionPage');
  }

  backMenu() {
    this.navCtrl.push(InicioPage);
   }

}
