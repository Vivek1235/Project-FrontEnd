import {EventEmitter, Injectable, Output} from '@angular/core';
import {skill} from "../model/skill.model";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";
import {JsonPipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  @Output() skillsChanged=new EventEmitter<skill[]>();
  skills:skill[]=[];
  message:any;
  constructor(private http:HttpClient,private userService:UserRegistrationService) { }
  getSkills()
  {
    return this.skills;
  }
  addSkill(skillAdd:skill)
  {

    return this.http.post<skill>("http://localhost:8080/skills/"+this.userService.getUser().id,skillAdd);


  }
  addSkills(skills:skill[])
  {

    this.skills.push(...skills);

  }


  getSkillsByUserId(userId:number)
  {
    return this.http.get<skill[]>('http://localhost:8080/skills/'+userId);
  }



  deleteSkillById(id:number)
  {
   return  this.http.delete<skill[]>('http://localhost:8080/skills/' + this.userService.getUser().id+'/'+id);
  }
  updateSkillById(updateSkill:skill)
  {
    console.log(updateSkill)
    return  this.http.put<skill>('http://localhost:8080/skills/' + this.userService.getUser().id,updateSkill);

  }
  fetchSkillById(id:number)
  {
    return this.http.get<skill>('http://localhost:8080/skills/skill/'+id);
  }

}
