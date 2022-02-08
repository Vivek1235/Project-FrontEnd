import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {userModel} from "../user.model";
import {UserRegistrationService} from "../user-registration.service";
import {Router} from "@angular/router";
import {NavbarService} from "../navbar.service";
import {error} from "@angular/compiler/src/util";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:userModel=new userModel("","");
  message:any;
  userMatch:userModel=new userModel("","");

  constructor(private  service:UserRegistrationService,private router:Router,private nav:NavbarService,private http:HttpClient) { }

  ngOnInit(): void {
    this.nav.hide();
  }
  onSubmit(form:NgForm)
  {

    const value=form.value;
    this.user.email=value.email;
    this.user.password=value.password;
    // console.log(this.user)
    this.http.post<userModel>("http://localhost:8080/login", this.user).subscribe(data=>{this.router.navigate(['/profile']);},
      error=>{this.message="Invalid Credentials";}
    )

    // console.log(this.userMatch);
    this.service.user.email=this.user.email;
    this.service.user.password=this.user.password;
    this.service.display();

    // if(this.userMatch==null)
    // {this.router.navigate(['/profile']);}
    // else
    // { this.message="Invalid Credentials";}
    form.reset();


  }


  registerUser()
  {
    this.router.navigate(['/register']);
  }

}
