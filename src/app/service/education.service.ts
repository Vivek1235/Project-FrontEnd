import { Injectable } from '@angular/core';
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
    return  this.http.delete<EducationModel[]>(`http://localhost:8080/education/${this.userService.getUser().id}/${id}`);
  }
  addEducation(educationAdd:EducationModel)
  {

    return this.http.post<EducationModel>("http://localhost:8080/education/"+this.userService.getUser().id,educationAdd);


  }
  fetchEducationById(id:number)
  {
    return this.http.get<EducationModel>('http://localhost:8080/educationList/education/'+id);
  }
  updateEducationById(education:EducationModel)
  {
    return  this.http.put<EducationModel>('http://localhost:8080/education/' + this.userService.getUser().id,education);

  }
}
