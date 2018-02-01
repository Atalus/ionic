import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'https://www.ivei.mx/includes/get-municipios.php';
@Injectable()
export class MunicipiosProvider {

  constructor(public http: Http) {
    console.log('Hello MunicipiosProvider Provider');
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

      this.http.get(apiUrl + "?idpadre=" + muni, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}
