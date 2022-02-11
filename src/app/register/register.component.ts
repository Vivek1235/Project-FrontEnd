import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {Form, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProfileModel} from "../model/profile.model";
import {UserRegistrationService} from "../service/user-registration.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  password:String='';
  confirmPassword:String='';
  user:ProfileModel=new ProfileModel(0,"","","","","",new Date(),"");
  message:any;
  constructor(private nav:NavbarService,private http:HttpClient,private router:Router,private service:UserRegistrationService) { }

  ngOnInit(): void {
    this.nav.hide();
  }
  onSubmit(form:NgForm)
  {
      const value=form.value;
      console.log(value);
      this.user.email=value.email;
      this.user.firstName=value.firstName;
      this.user.lastName=value.lastName;
      this.user.phoneNumber=value.phoneNumber;

    this.service.doRegister(this.user).subscribe((data)=>this.router.navigate(['/login']),error => {this.message="User already exists"});
    form.reset();
  }

}
