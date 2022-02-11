import {EventEmitter, Injectable, Output} from '@angular/core';
import {skill} from "../model/skill.model";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";

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

    return this.http.post<skill>("http://localhost:8080/skills/"+this.userService.user.id,skillAdd);


  }
  addSkills(skills:skill[])
  {

    this.skills.push(...skills);

  }


  getSkillsByUserId(id:number)
  {
    return this.http.get<skill[]>('http://localhost:8080/skills/'+id);
  }



  deleteSkillById(id:number)
  {
   return  this.http.delete<skill[]>('http://localhost:8080/skills/' + this.userService.user.id+'/'+id);
  }
  updateSkillById(updateSkill:skill)
  {
    return  this.http.put<skill[]>('http://localhost:8080/skills/' + this.userService.user.id,skill);
  }
}
