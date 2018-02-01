import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the TestUbicacionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-ubicacion',
  templateUrl: 'test-ubicacion.html',
})
export class TestUbicacionPage {
	NumPregunta: number = 1;
	showTest: boolean = true;
	showPreloader: boolean = false;
	idTest: number;
	examen: any;
	contador: number;
  contadorCiclo: number = 0;
	userRespuestas: any = [];
	size: number;
	finalizar: number;
  title: string;
  mostrarCont: number;
  nivel: number;
  contarCorrecta: number;
  sendData: any;
  doexamen: any;
  letra: string;
  showBoton: boolean = false;
  showCorrecto: boolean = false;
  showErroneo: boolean = false;

  selectA: boolean = false;
  selectB: boolean = false;
  selectC: boolean = false;
  selectD: boolean = false;
  indicesHech: any;

  pregunta: any;
  opcion1: any;
  opcion2: any;
  opcion3: any;
  opcion4: any;

rateForm: FormGroup;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public dataService: DataProvider, public toastCtrl: ToastController, public tematicas: GettematicasProvider, public formBuilder: FormBuilder) {
  	
this.rateForm = formBuilder.group({
  		opcionesForm: ['']
  	});

  	this.presentLoading();
  	  this.idTest =22;
      this.nivel = 1;
      this.contarCorrecta = 0;
    
    this.doexamen = this.navParams.get('doexamen');
    if(this.doexamen != "yes"){
      this.navCtrl.push(InicioPage);
    }
  	console.log(this.idTest);

  	let sendIdUser = {
  		"userid": this.dataService.iduser
  	};

  	

let sendIdTest = {
	"idtest": this.idTest
};
    this.tematicas.postData(sendIdTest,'gettestubicaciones').then((result) => {
    	 this.examen = result;
    	 console.log(result);
    	  this.size = Object.keys(this.examen).length;

    	 

      this.finalizar = this.size - 1;
      this.contadorCiclo = 0;
      this.contador = 0;
      this.mostrarCont = this.contador + 1;

      this.pregunta = this.examen[this.contador].pregunta;
      this.opcion1 = this.examen[this.contador].opcion_1;
      this.opcion2 = this.examen[this.contador].opcion_2;
      this.opcion3 = this.examen[this.contador].opcion_3;
      this.opcion4 = this.examen[this.contador].opcion_4;

      console.log("Respuesta: " + this.examen[this.contador].respuesta);


  
    }, (err) => {
      // Error log
    });

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestUbicacionPage');
  }



 siguientePregunta(){
  let formControls: any = this.rateForm.controls;
  let data = this.rateForm.value;
  this.letra = data.opcionesForm;


 let evaluarText = "select"+this.examen[this.contador].respuesta;
   if(this.letra == evaluarText){
    this.contarCorrecta++;
   }
   console.log("respuesta: " + evaluarText + " - correcta: " + this.letra);

this.userRespuestas[this.contador] = this.letra;

this.contador++;
if(this.contador == this.size){
	this.showTest = false;
	this.showPreloader = true;
if(this.contarCorrecta > 7){
            console.log("pasamos al siguiente nivel");
            
            this.nivel++;
          }

	 let TIME_IN_MS = 2000;
let hideFooterTimeout = setTimeout( () => {
     this.navCtrl.push('ResultadoUbicacionPage', {
        idtest: this.idTest,
        examenData: this.examen,
    resultados: this.userRespuestas,
    nameTest: this.title,
    nivel: this.nivel
    });
}, TIME_IN_MS);
} else {

  this.contadorCiclo++;
   if( this.contadorCiclo == 10){
          console.log("evaluar");
          if(this.contarCorrecta > 7){
            console.log("pasamos al siguiente nivel");
            this.contarCorrecta = 0;
            this.contadorCiclo = 0;
            this.nivel++;
          } else {
            console.log("no pasamos");
            this.salirText();
          }
   }



	formControls.opcionesForm.setValue();
	this.NumPregunta++;
this.presentLoading();
	this.pregunta = this.examen[this.contador].pregunta;
      this.opcion1 = this.examen[this.contador].opcion_1;
      this.opcion2 = this.examen[this.contador].opcion_2;
      this.opcion3 = this.examen[this.contador].opcion_3;
      this.opcion4 = this.examen[this.contador].opcion_4;
      console.log("Respuesta: " + this.examen[this.contador].respuesta);
}
 

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando Pregunta...",
      duration: 1000
    });
    loader.present();
  }

  salirText(){
    this.showTest = false;
  this.showPreloader = true;


   let TIME_IN_MS = 2000;
let hideFooterTimeout = setTimeout( () => {
     this.navCtrl.push('ResultadoUbicacionPage', {
        idtest: this.idTest,
        examenData: this.examen,
    resultados: this.userRespuestas,
    nameTest: this.title,
    nivel: this.nivel
    });
}, TIME_IN_MS);
  }

}
