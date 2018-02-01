import { Injectable } from '@angular/core';
import { Platform, AlertController,ModalController } from 'ionic-angular';
import { ConnectivityProvider } from '../connectivity/connectivity';
import { Geolocation } from '@ionic-native/geolocation';
import { GettematicasProvider } from '../../providers/gettematicas/gettematicas';
import { DataProvider } from '../../providers/data/data';
import { SucursalmodalPage } from '../../pages/sucursalmodal/sucursalmodal';
import {} from '@types/googlemaps';

@Injectable()
export class GoogleMapsProvider {

	mapElement: any;
	pleaseConnect: any;
	map: any;
	mapInitialised: boolean = false;
	mapLoaded: any;
	mapLoadedObserver: any;
	currentMarker: any;
	apiKey: string = "AIzaSyAhmNtb_n0eE92QfH-Nfoxisx7ZFCKviTw";
  sendData: any;
  size: any;
  response1: any;

  constructor(public dataService: DataProvider, public connectivityService: ConnectivityProvider, public geolocation: Geolocation, public alertCtrl: AlertController, public tematicas: GettematicasProvider, public modalCtrl: ModalController){

  } 

  init(mapElement: any, pleaseConnect: any): Promise<any>{

  	this.mapElement = mapElement;
  	this.pleaseConnect = pleaseConnect;
  	return this.loadGoogleMaps();

  }

  

  loadGoogleMaps(): Promise<any> {

  	return new Promise((resolve) => {

  		if(typeof google == "undefined" || typeof google.maps == "undefined"){

  			console.log("Google maps JavaScript needs to be loaded");
  			this.disableMap();

  			if(this.connectivityService.isOnline()){
  				window['mapInit'] = () => {
  					this.initMap().then(() => {
  						resolve(true);
  					});

  					this.enableMap();
  				}

  				let script = document.createElement("script");
  				script.id = "googleMaps";

  				if(this.apiKey){
  					script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
  				} else {
  					script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
  				}

  				document.body.appendChild(script);

         
  			}

  		} else {

  			if(this.connectivityService.isOnline()){
  				this.initMap();
  				this.enableMap();
  			} else {
  				this.disableMap();
  			}
  		}

  		this.addConnectivityListeners();
  	});

  }

  initMap(): Promise<any>{



     
let optionsGPS = {timeout: 5000};
  	this.mapInitialised = true;
  	return new Promise((resolve)=> {
     
  		this.geolocation.getCurrentPosition(optionsGPS).then(

        (position) => {

         


  			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  			let mapOptions = {
  				center: latLng,
  				zoom: 10,
  				mapTypeId: google.maps.MapTypeId.ROADMAP
  			}

  			this.map = new google.maps.Map(this.mapElement, mapOptions);
        //this.changeMarker(position.coords.latitude, position.coords.longitude);
        //console.log(position.coords.latitude + "--"+position.coords.longitude);

         this.tematicas.postData(this.sendData,"sucursales").then((result) => {
       
         this.response1 = result;
     
       this.size = Object.keys(this.response1).length;
console.log(this.size);
var image = 'http://www.datalus.mx/projects/ivei/logomapa.png';
let sucArray = [];
let myScope={};



       for(let i = 0; i < this.size; i++){
        let contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + this.response1[i].esc_desc + '</h1> <hr />'+
            '<div id="bodyContent">'+
            '<p>' + this.response1[i].desc_app + '</p>'+
            '</div>'+
            '</div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });
sucArray.push(this.response1[i].esc_desc);
let latLng22 = new google.maps.LatLng(this.response1[i].esc_lat,this.response1[i].esc_long);

        myScope["marker"+i] = new google.maps.Marker({
      map: this.map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      icon: image,
      position:latLng22
    });

myScope["marker"+i].addListener('click', function() {
          console.log(i);

        infowindow.open(this.map, myScope["marker"+i]);
        });
       

       }

       console.log(sucArray);

       this.dataService.sucursales = sucArray;


    });

        
  			resolve(true);
  		}).catch((err) => console.log(err));


  	});

  }



  disableMap(): void {

  	if(this.pleaseConnect){
  		this.pleaseConnect.style.display = "block";
  	}

  }

  enableMap(): void {

  	if(this.pleaseConnect){
  		this.pleaseConnect.style.display = "none";
  	}
  }

  addConnectivityListeners(): void {



  	this.connectivityService.watchOnline().subscribe(() => {
  		console.log("online");

  		setTimeout(() => {

  			if(typeof google == "undefined" || typeof google.maps == "undefined"){
  				this.loadGoogleMaps();
  			} else {
  				if(!this.mapInitialised){
  					this.initMap();
  				}

  				this.enableMap();
  			}
  		}, 2000);
  	});

  	this.connectivityService.watchOffline().subscribe(() => {

  		console.log("offline");
  		this.disableMap();
  	});

  }

presentWelcomeModal(): void{
   let welcomeModal = this.modalCtrl.create(SucursalmodalPage, { });
   welcomeModal.onDidDismiss(data => {

    
   });
   welcomeModal.present();
 }

  changeMarker(lat: number, lng: number): void {


  	let latLng = new google.maps.LatLng(lat, lng);
    //console.log(latLng);
  

  	let marker = new google.maps.Marker({
  		map: this.map,
      draggable: true,
  		animation: google.maps.Animation.DROP,
  		position:latLng
  	});

  	if(this.currentMarker){
  		//this.currentMarker.setMap(null);
  	}

  	//this.currentMarker.push(marker);
    //console.log(marker);

  }

  changeSucursal(lat: number, lng: number): void {


    let latLng = new google.maps.LatLng(lat, lng);
  


   this.map.setCenter(latLng);
   this.map.setZoom(16);

    if(this.currentMarker){
      //this.currentMarker.setMap(null);
    }

    //this.currentMarker.push(marker);
    //console.log(marker);

  }
}
