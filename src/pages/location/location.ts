import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, Platform,  AlertController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { DataProvider } from '../../providers/data/data';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalmodalPage } from '../sucursalmodal/sucursalmodal';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {



	@ViewChild('map') mapElement: ElementRef;
	@ViewChild('pleaseConnect') pleaseConnect: ElementRef;

	latitude: number;
	longitude: number;
  sendData: any;
  size: any;
  planteles: any;
  myDetailsForm: FormGroup;
  sendServicioData2: any;
  responseData2: any;
  constructor(public formBuilder: FormBuilder, public tematicas: GettematicasProvider, public navCtrl: NavController, public maps: GoogleMapsProvider, public platform: Platform, public dataService: DataProvider, public alertCtrl: AlertController, public geolocation: Geolocation, public diagnostic: Diagnostic,public loadingCtrl: LoadingController ) {

this.planteles = this.dataService.sucursales;


  }



  ionViewDidLoad() {

  	


  	this.platform.ready().then((location) =>{

      


  		this.dataService.getLocation().then((location) => {

  			let savedLocation: any = false;

  			if(location && typeof(location) != "undefined"){
  				savedLocation = JSON.parse(location);
  			}

  			let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {

  				if(savedLocation){
  					this.latitude = savedLocation.latitude;
  					this.longitude = savedLocation.longitude;

  					this.maps.changeMarker(this.latitude, this.longitude);
  				}

  				this.planteles = this.dataService.sucursales;
  			
  				console.log(this.planteles);
  			});
  		});

  	});


  
  }

  setLocation(): void {

  	this.geolocation.getCurrentPosition().then((position) => {
  		this.latitude = position.coords.latitude;
  		this.longitude = position.coords.longitude;

  		this.maps.changeMarker(position.coords.latitude, position.coords.longitude);

  		let data = {
  			latitude: this.latitude,
  			longitude: this.longitude
  		};

  		this.dataService.setLocation(data);

  		let alert = this.alertCtrl.create({
  			title: 'Location set!',
  			subTitle: 'You can now find your way back to your camp site from anywhere by clicking the button in the top right corner',
  			buttons: [{text: 'Ok'}]
  		});
  		alert.present();
  	});

  }

  takeMeHome(): void {

  	if(!this.latitude || !this.longitude){



  		let alert = this.alertCtrl.create({
  			title: 'Nowhere to go!',
  			subTitle: 'You need to set your camp location first. For now, want to launch Maps to find your own way home?',
  			buttons: ['Ok']
  		});

  		alert.present();
  	} else {
  		let destination = this.latitude + ',' + this.longitude;

  		if(this.platform.is('ios')){
  			window.open('maps://?q=' + destination, '_system');
  		} else {
  			let label = encodeURI('My Campsite');
  			window.open('geo:0,0?q=' + destination + '(' + label + ')',
'_system');
  		}
  	}

  }

  presentLoading() {
    
  }

  buscar(): void {

  }

  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
     this.sendServicioData2 = {
        "sucursal": selectedValue
      }
    this.tematicas.postData(this.sendServicioData2,'getcordsbyname').then((result) => {
        this.responseData2 = result;
        let latNew = this.responseData2[0].esc_lat;
        let longNew = this.responseData2[0].esc_long
      console.log(latNew);
      console.log(longNew);

      this.maps.changeSucursal(latNew, longNew);
      });
  }




}
