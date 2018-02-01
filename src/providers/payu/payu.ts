import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PayuProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
let apiUrl = 'http://www.ivei.mx/alumnos/php/sent-payment-month-app.php';
@Injectable()
export class PayuProvider {

  constructor(public http: Http) {
    console.log('Hello PayuProvider Provider');
  }

postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  getData(muni) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.get(apiUrl + "?" + muni, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
