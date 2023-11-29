import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';
import 'firebase/database';

import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private dbPath = '/users';

  usersRef: AngularFireList<Register>;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {
    this.usersRef = db.list(this.dbPath);
  }


  createUser(key: any,user: any): any {
    return this.usersRef.update(key, user)
  }

  update(key: string, value: any): Promise<void> {
    
    return this.usersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }

  registerUser(user: Register) :Promise<any> {
    console.log("+++++++++++ user in service +++++++", user)
    return this.afAuth.createUserWithEmailAndPassword(user.email.trim(), user.password).then((res)=>{
      console.log(res.user)
      if (res.user) {
        let uid = res.user.uid;
        this.createUser(uid,{
          firstname: user.firstname,
          lastname:user.lastname,
          address: user.address,
          city: user.city,
          zipcode: user.zipcode,
          mobile: user.mobile,
          email: user.email,
          password: user.password,
          type: user.type
        });
      }
      
      return "Success";
    }).catch((err)=>{
      return err.message;
    })
  }

 
}
