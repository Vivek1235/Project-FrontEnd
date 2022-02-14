import {Injectable, OnInit} from '@angular/core';
import {userModel} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {ProfileModel} from "../model/profile.model";
import {RegisterModel} from "../model/register.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService implements OnInit{

  constructor(private http:HttpClient,private router:Router) {
  }

  ngOnInit(): void {
  }

  doLogin(user:userModel) {

    return this.http.post<userModel>("http://localhost:8080/login",user);
  }
  doRegister(user:RegisterModel)
  {
    console.log(user);
    return this.http.post<boolean>("http://localhost:8080/register",user);
  }
  display()
  {

  }
  getUser()
  {
    let user=localStorage.getItem('user');
    if(user!=null)
    {
      return JSON.parse(user);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  }

