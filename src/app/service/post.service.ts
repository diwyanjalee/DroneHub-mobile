import { Injectable } from '@angular/core';
// import{ Firestore, collectionData } from '@angular/fire/firestore';
import { collection }from '@firebase/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class dataService {
  
  private dbPath = '/post';
  postRef: AngularFireList<any>;
  constructor( private db: AngularFireDatabase) {
    this.postRef = db.list(this.dbPath);
   }

  getPosts() : AngularFireList<any>{
    return this.postRef;
  }
}
