import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the BarCodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-code',
  templateUrl: 'bar-code.html',
})
export class BarCodePage {
  URLCode: any;
  FormatCode: any;
  isFound: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public iab: InAppBrowser) {
  	this.barcodeScanner.scan().then((barcodeData) => {
 // Success! Barcode data is here
 let myJSON = JSON.stringify(barcodeData);
 this.URLCode = barcodeData['text'];
 this.FormatCode = barcodeData['format'];
this.isFound = true;
}, (err) => {
    // An error occurred
    console.log(err);
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarCodePage');
  }


openWeb(www){
  let browser = this.iab.create(www, '_system');
}

}
