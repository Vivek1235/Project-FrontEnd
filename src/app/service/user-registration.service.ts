import { Injectable } from '@angular/core';
import {userModel} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {ProfileModel} from "../model/profile.model";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  user:userModel=new userModel(0,"","");
  constructor(private http:HttpClient) {
  }

  doLogin(user:userModel) {

    return this.http.post<userModel>("http://localhost:8080/login",user);
  }
  doRegister(user:ProfileModel)
  {
    return this.http.post<boolean>("http://localhost:8080/register",user);
  }
  display()
  {
    console.log(this.user);
  }
}
