import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginForm: FormGroup;

  isSubmitted =  false;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    ) {}

    userLogin(){
      this.isSubmitted = true;
     if (this.loginForm.valid) {
         const { email, password } = this.loginForm.value;
         this.afAuth.signInWithEmailAndPassword(email, password)
           .then(() => {
             // Login successful
             // Redirect or perform any other actions
           })
           .catch((error) => {
             // Login error
             console.log(error);
           })
  
       //this.router.navigate(['home1']);
     }
  }
  
  get errorControl() {
    return this.loginForm.controls;
  }

  signIn(email: string, password: string) :Promise<any> {

    console.log("------email", email, "--password---", password)
    return this.afAuth.signInWithEmailAndPassword(email, password).then((res)=>{
      return res;
    }).catch((err)=>{
      return err.message;
    })
  }
}
