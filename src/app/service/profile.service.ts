import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";
import {ProfileModel} from "../model/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   profile=new ProfileModel(0,"","","","","",new Date(),"",'');

  constructor(private http:HttpClient,private userService:UserRegistrationService) { }

  getProfileDetails()
  {
    return this.http.get<ProfileModel>('http://localhost:8080/profile/'+this.userService.getUser().id)

  }
  updateProfile(profile:ProfileModel)
  {
    return this.http.put<ProfileModel>('http://localhost:8080/profile/'+this.userService.getUser().id,profile)
  }
}
