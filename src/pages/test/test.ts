import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
    NumPregunta: number = 1;
    showTest: boolean = true;
  showPreloader: boolean = false;
	idTest: string;
	examen: any;
	contador: number;
	userRespuestas: any = [];
	size: number;
  contarCorrecta: number;
	finalizar: number;
  title: string;
  mostrarCont: number;
  sendData: any;
  doexamen: any;
  letra: string;
  showBoton: boolean = false;
  showCorrecto: boolean = false;
  showErroneo: boolean = false;
  shakeA: boolean = false;
  shakeB: boolean = false;
  shakeC: boolean = false;
  shakeD: boolean = false;

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

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider, public toastCtrl: ToastController, public tematicas: GettematicasProvider, public formBuilder: FormBuilder) {
  	this.idTest = this.navParams.get('idtest');
    this.title = this.navParams.get('nametest');


this.rateForm = formBuilder.group({
      opcionesForm: ['']
    });

    this.presentLoading();
    this.contarCorrecta = 0;
    this.doexamen = this.navParams.get('doexamen');
    if(this.doexamen != "yes"){
      this.navCtrl.push(InicioPage);
    }
  	console.log(this.idTest);

  	let sendIdUser = {
  		"userid": this.dataService.iduser
  	};
/*
  	this.tematicas.postData(sendIdUser,"getexameneshechos").then((result) => {
       
         let response1 = result;
      var size = Object.keys(response1).length;
    
     for(let i = 0; i < size; i++){ 
           
          console.log("examen:" +response1[i].id);


          if(this.idTest == response1[i].id){
 let alert = this.alertCtrl.create({
    title: '¡Lo siento!',
    message: 'Ya has realizado este examen.',
    buttons: [
      
      {
        text: 'Ok',
        handler: () => {
          
this.navCtrl.push(InicioPage);
         

          
        }
      }
    ]
  });
  alert.present();

            
          }

      }
      console.log(this.indicesHech);

       });*/

let sendIdTest = {
	"idtest": this.idTest
};
this.tematicas.postData(sendIdTest,'gettestubicaciones').then((result) => {
       this.examen = result;
       console.log(result);
        this.size = Object.keys(this.examen).length;

        if(this.size == 0){
           let alert = this.alertCtrl.create({
    title: '¡Lo siento!',
    message: 'No hay reactivos para este examen',
    buttons: [
      
      {
        text: 'Ok',
        handler: () => {
          
this.navCtrl.setRoot(InicioPage);
         

          
        }
      }
    ]
  });
  alert.present();
        }

        else {

       


       

      this.finalizar = this.size - 1;
     
      this.contador = 0;
      this.mostrarCont = this.contador + 1;

      this.pregunta = this.examen[this.contador].pregunta;
      this.opcion1 = this.examen[this.contador].opcion_1;
      this.opcion2 = this.examen[this.contador].opcion_2;
      this.opcion3 = this.examen[this.contador].opcion_3;
      this.opcion4 = this.examen[this.contador].opcion_4;

      console.log("Respuesta: " + this.examen[this.contador].respuesta);

 }
  
    }, (err) => {
      // Error log
    });
  
  

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  seleccionar(resp): void{
    this.letra = resp;

    if(resp == "A"){
      this.selectA=true;
      this.selectB=false;
      this.selectC=false;
      this.selectD=false;
    } else if(resp == "B"){
      this.selectA=false;
      this.selectB=true;
      this.selectC=false;
      this.selectD=false;
    } else if(resp == "C"){
      this.selectA=false;
      this.selectB=false;
      this.selectC=true;
      this.selectD=false;
    } else if(resp == "D"){
     this.selectA=false;
      this.selectB=false;
      this.selectC=false;
      this.selectD=true;
    }

    this.showBoton = true;
    this.shakeA = false;
    this.shakeB = false;
    this.shakeC = false;
    this.shakeD = false;
  }

  respuesta(): void {
    this.selectA = false;
    this.selectB = false;
    this.selectC = false;
    this.selectD = false;
    this.showBoton = false;

    if(this.letra != ""){
    
  	if(this.examen[this.contador].respuesta == this.letra){
      this.showCorrecto = true;
  		//this.presentToast("Correcta.");
      
      let TIME_IN_MS = 2000;
let hideFooterTimeout = setTimeout( () => {
     this.showCorrecto = false
}, TIME_IN_MS);
      
  	} else {
      let correcRes = this.examen[this.contador].respuesta;
      if(correcRes == "A"){
        this.shakeA = true;
        

      }else if(correcRes == "B"){
        this.shakeB = true;
        

      }else if(correcRes == "C"){
        this.shakeC = true;
       

      }else if(correcRes == "D"){
        this.shakeD = true;
       

      }
      this.showErroneo = true;
  		//this.presentToast("Incorrecta.");
       let TIME_IN_MS = 2000;
let hideFooterTimeout = setTimeout( () => {
     this.showErroneo = false;
}, TIME_IN_MS);
  	}
  	
	this.userRespuestas[this.contador] = this.letra;
  	
  	//console.log(this.size + " " + this.contador);
  	if(this.finalizar == this.contador){
  		console.log("Examen Terminado");
  		console.log(this.userRespuestas);
  		this.navCtrl.push('ResultadoPage', {
        idtest: this.idTest,
        examenData: this.examen,
    resultados: this.userRespuestas,
    nameTest: this.title
    });
  	} else {
  		this.contador++;
      this.mostrarCont = this.contador + 1;
  	console.log("Respuesta: " + this.examen[this.contador].respuesta);
    this.letra = "";
  	}
  	} else {
      let alert = this.alertCtrl.create({
        title: '¡Oops!',
        subTitle: 'No has seleccionado una respuesta.',
        buttons: ['Ok']
      });
      
      alert.present();
    }
  }

  presentToast(veredicto) {
  let toast = this.toastCtrl.create({
    message: 'Respuesta ' + veredicto,
    duration: 2000,
    position: 'top'
   // showCloseButton: true
  });

 

  toast.present();
}

backMenu(){
  let alert = this.alertCtrl.create({
    title: 'Salir del examen',
    message: '¿Estas seguro de salir?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Si',
        handler: () => {
          
   this.navCtrl.setRoot(InicioPage);
         

          
        }
      }
    ]
  });
  alert.present();
}

checkShow() {

  /*
    var x = document.getElementById("check");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "hide"); }, 2000);
*/
}
minusShow() {
   

   /* var x = document.getElementById("minus");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", "hide"); }, 2000);
    */
}

 presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando Pregunta...",
      duration: 1000
    });
    loader.present();
  }

   siguientePregunta(){
  let formControls: any = this.rateForm.controls;
  let data = this.rateForm.value;
  this.letra = data.opcionesForm;

  let evaluarText = "select"+this.examen[this.contador].respuesta;
   if(this.letra == evaluarText){
    this.contarCorrecta++;
   }
   console.log("contar correcta:" + this.contarCorrecta);
console.log("size:" + this.size);
this.userRespuestas[this.contador] = this.letra;

this.contador++;
if(this.contador == this.size){
  this.showTest = false;
  this.showPreloader = true;


   let TIME_IN_MS = 2000;
let hideFooterTimeout = setTimeout( () => {
     this.navCtrl.push('ResultadoPage', {
        idtest: this.idTest,
        examenData: this.examen,
        sizeTest: this.size,
        correctas: this.contarCorrecta,
    resultados: this.userRespuestas,
    nameTest: this.title
    });
}, TIME_IN_MS);
} else {
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


}
