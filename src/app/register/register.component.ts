import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserRegistrationService} from "../service/user-registration.service";
import {RegisterModel} from "../model/register.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:RegisterModel=new RegisterModel("","","","","");
  message:any;
  // @ts-ignore
  registerForm:FormGroup;
  constructor(private nav:NavbarService,private http:HttpClient,private router:Router,private service:UserRegistrationService) { }

  ngOnInit(): void {
    this.nav.hide();
    this.registerForm=new FormGroup(
      {
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'firstName':new FormControl(null,Validators.required),
        'lastName':new FormControl(null,Validators.required),
        'phoneNumber':new FormControl(null,Validators.required),
        'password':new FormControl(null,Validators.required),
        'confirmPassword':new FormControl(null,Validators.required),
      }
    )
  }
  onSubmit()
  {
      const value=this.registerForm.value;
      console.log(value);
      this.user.email=value.email;
      this.user.firstName=value.firstName;
      this.user.lastName=value.lastName;
      this.user.phoneNumber=value.phoneNumber;
      this.user.password=value.password;
    this.service.doRegister(this.user).subscribe((data)=>{this.router.navigate(['/login']);
      alert("registration successful");},
        error => {alert("User already exists")});
    this.registerForm.reset();
  }

}
