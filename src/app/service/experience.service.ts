import {EventEmitter, Injectable, Output} from '@angular/core';
import {skill} from "../model/skill.model";
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
    return  this.http.delete<ExperienceModel[]>('http://localhost:8080/experience/' + this.userService.user.id+'/'+id);
  }
  addExperience(experienceAdd:ExperienceModel)
  {

    return this.http.post<ExperienceModel>("http://localhost:8080/experience/"+this.userService.user.id,experienceAdd);


  }

}
