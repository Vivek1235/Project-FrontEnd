import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";
import {ExperienceModel} from "../model/experience.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences:ExperienceModel[]=[];
  constructor(private http:HttpClient,private userService:UserRegistrationService) { }



  getExperiencesById(id:number)
  {
    return this.http.get<ExperienceModel[]>('http://localhost:8080/experience/'+id);
  }

  deleteExperienceById(id:number)
  {
    return  this.http.delete<ExperienceModel[]>(`http://localhost:8080/experience/${this.userService.getUser().id}/${id}`);
  }
  addExperience(experienceAdd:ExperienceModel)
  {

    return this.http.post<ExperienceModel>("http://localhost:8080/experience/"+this.userService.getUser().id,experienceAdd);


  }
  fetchExperienceById(id:number)
  {
    return this.http.get<ExperienceModel>('http://localhost:8080/experienceList/experience/'+id);
  }
  updateExperienceById(experience:ExperienceModel)
  {
    return  this.http.put<ExperienceModel>('http://localhost:8080/experience/' + this.userService.getUser().id,experience);

  }

}
