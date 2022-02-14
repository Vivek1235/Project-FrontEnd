import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {userModel} from "../model/user.model";
import {UserRegistrationService} from "../service/user-registration.service";
import {Router} from "@angular/router";
import {NavbarService} from "../service/navbar.service";
import {error} from "@angular/compiler/src/util";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:userModel=new userModel(0,"","");
  message:any;
  userMatch:userModel=new userModel(0,"","");

  constructor(private  service:UserRegistrationService,private router:Router,private nav:NavbarService,private http:HttpClient) { }

  ngOnInit(): void {
    this.nav.hide();
  }
  onSubmit(form:NgForm)
  {

    const value=form.value;
    this.user.email=value.email;
    this.user.password=value.password;

      this.service.doLogin(this.user).subscribe((data:userModel)=>{
          localStorage.setItem('user',JSON.stringify(data));
       this.router.navigate(['/profile']);},
      error=>{this.message="Invalid Credentials";}

    )



    form.reset();


  }


  registerUser()
  {
    this.router.navigate(['/register']);
  }

}
