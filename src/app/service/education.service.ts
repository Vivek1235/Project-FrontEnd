import { Injectable } from '@angular/core';
import {ExperienceModel} from "../model/experience.model";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";
import {EducationModel} from "../model/education.model";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient,private userService:UserRegistrationService) { }
  getEducationListByUserId(id:number)
  {
    return this.http.get<EducationModel[]>('http://localhost:8080/education/'+id);
  }

  deleteEducationById(id:number)
  {
    return  this.http.delete<EducationModel[]>('http://localhost:8080/education/' + this.userService.user.id+'/'+id);
  }
  addEducation(educationAdd:EducationModel)
  {

    return this.http.post<EducationModel>("http://localhost:8080/experience/"+this.userService.user.id,educationAdd);


  }
}
