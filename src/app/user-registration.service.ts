import { Injectable } from '@angular/core';
import {userModel} from "./user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  user:userModel=new userModel("","");
  constructor(private http:HttpClient) {
  }

  doLogin(user:userModel) {

      //return this.http.get("http://localhost:8080/registration");
      //return this.http.get("http://localhost:8080/registration");
  }
  display()
  {
    console.log(this.user);
  }
}
