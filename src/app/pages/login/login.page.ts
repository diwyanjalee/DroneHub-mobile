import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { ToastController } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  isSubmitted = false;
  email = "a7@gmail.com";
  password = "78456@7895666";
  error = true;
  
 
  constructor( private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  
  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position
    });

    await toast.present();
  }


  get errorControl() {
    return this.loginForm.controls;
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.loginService.signIn(this.email,this.password).then((res) =>{
        if (res.user && res.user.uid) {
          this.router.navigate(['/home1']);
        }
        else {
          this.presentToast('top', "invalid email or password")
        }
      }).catch(err => {
        this.presentToast('top', "Something went wrong, Please try again")
        
      })
    } 
  }

  register(){
    this.router.navigate(['register']);
  }

}
