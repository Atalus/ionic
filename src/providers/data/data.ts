import { Injectable, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class DataProvider {

  fbid: number;
  iduser: number;
  idremoteuser: number;
  matricula: string;
  username: string;
  picture: string;
  db: any;
  data: any;
  cloudantUsername: string;
  cloudantPassword: string;
  remote: string;
  sucursales: any;

  constructor(public storage: Storage, public zone: NgZone) {

  }

  
  addDocument(message){
    this.db.put(message);
  }

  getDocuments(){

    return new Promise(resolve => {

      this.db.allDocs({
        include_docs: true,
        limit: 30,
        descending: true
      }).then((result) => {

        this.data = [];

        let docs= result.rows.map((row) => {
          this.data.push(row.doc);
        });

        this.data.reverse();
        resolve(this.data);

        this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });
      }).catch((error) => {
        console.log(error);
      });
    });

  }

  handleChange(change){

  	console.log(change);

    this.zone.run(() => {

      let changedDoc = null;
      let changedIndex = null;

      this.data.forEach((doc, index) =>{

        if(doc._id === change.id){
          changedDoc = doc;
          changedIndex = index;
        }
      });

      //A document was deleted
      if(change.deleted){
        this.data.splice(changedIndex, 1);
      } else {
        // A document was updated
        if(changedDoc){
          this.data[changedIndex] = change.doc;
        }

        //A document was added
        else{
          this.data.push(change.doc);
        }
      }
    });

  }

  setMyDetails(data: Object): void{
  	let newData = JSON.stringify(data);
  	this.storage.set('mydetails', newData);
  }

  setExamen(data: Object, name: string): void{
    let newData = JSON.stringify(data);
    this.storage.remove(name);
    
    this.storage.set(name, newData);
  }

  setCampDetails(data: Object): void {
  	let newData = JSON.stringify(data);
  	this.storage.set('campdetails', newData);
  }

  salirData(): void {
    this.storage.remove('mydetails');
    this.storage.remove('indice');
    this.storage.remove('exameneshechos');
  }

  setLocation(data: Object): void{
  	let newData = JSON.stringify(data);
  	this.storage.set('location', newData);
  }

  getExams(): Promise<any>{
    return this.storage.get('indice');
  }

  getExam(idexamen: string): Promise<any>{
   
    let nameEX = "examen"+idexamen;
    console.log(nameEX);
    return this.storage.get(nameEX);
  }

  getExamenesHechos(): Promise<any>{
  	return this.storage.get('exameneshechos');
  }

    getMyDetails(): Promise<any>{
    return this.storage.get('mydetails');
  }

  getCampDetails(): Promise<any>{
  	return this.storage.get('campdetails');
  }
  getLocation(): Promise<any>{
  	return this.storage.get('location');
  }

  getData(): Promise<any>{
  	return this.storage.get('checklists');
  }

  save(data: any): void{
  	let saveData = [];

  	//Remove observables
  	data.forEach((checklist) => {
  		saveData.push({
  			title: checklist.title,
  			items: checklist.items
  		});
  	});

  	let newData = JSON.stringify(saveData);
  	this.storage.set('checklists', newData);

  }

}
