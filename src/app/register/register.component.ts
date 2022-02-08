import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../navbar.service";
import {Form, NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  password:String='';
  confirmPassword:String='';
  user={email:String,firstName:String,lastName:String,password:String};
  message:any;
  constructor(private nav:NavbarService,private http:HttpClient,private router:Router) { }

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
      this.user.password=value.password;
    this.http.post<boolean>("http://localhost:8080/register",this.user).subscribe((data)=>this.router.navigate(['/login']),error => {this.message="User already exists"});
    form.reset();
  }

}
