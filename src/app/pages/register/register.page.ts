import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { RegisterService } from 'src/app/service/register.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  user : Register= {
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
    mobile: "",
    email: "",
    password: "",
    registered: false,
    type: "user"
  };

  registerForm: FormGroup;
  isSubmitted = false;
  confirmPassword = "";
  fName = "tha";
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController
    ) {
   }

   ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zCode: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get errorControl() {
    return this.registerForm.controls;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 500,
      position: position
    });

    await toast.present();
  }
  registerUser(): void {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      console.log("-------user", this.user)
    this.registerService.registerUser(this.user).then((res)=>{
       
        if (res === "Success") {
          this.presentToast('top', "successfully registerd")
          this.router.navigate(['/login']);
          
        }
        else {
          alert(res)
        }
        
      })

    }
      

   }
   login(){
    this.router.navigate(['login']);
  }

}
