import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import 'firebase/database';
import { Posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private dbPath = '/post';

  postRef: AngularFireList<Posts>;

  constructor( public db: AngularFireDatabase,) { 
    this.postRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Posts> {
    console.log("------------->",this.postRef)
    return this.postRef;
  }

}
