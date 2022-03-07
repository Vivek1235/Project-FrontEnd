import {EventEmitter, Injectable, Output} from '@angular/core';
import {skillModel} from "../model/skill.model";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "./user-registration.service";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  @Output() skillsChanged=new EventEmitter<skillModel[]>();
  skills:skillModel[]=[];
  message:any;
  constructor(private http:HttpClient,private userService:UserRegistrationService) { }
  getSkills()
  {
    return this.skills;
  }
  addSkill(skillAdd:skillModel)
  {

    return this.http.post<skillModel>("http://localhost:8080/skills/"+this.userService.getUser().id,skillAdd);


  }
  addSkills(skills:skillModel[])
  {

    this.skills.push(...skills);

  }


  getSkillsByUserId(userId:number)
  {
    return this.http.get<skillModel[]>('http://localhost:8080/skills/'+userId);
  }



  deleteSkillById(id:number)
  {
   return  this.http.delete<skillModel[]>('http://localhost:8080/skills/' + this.userService.getUser().id+'/'+id);
  }
  updateSkillById(updateSkill:skillModel)
  {
    console.log(updateSkill)
    return  this.http.put<skillModel>('http://localhost:8080/skills/' + this.userService.getUser().id,updateSkill);

  }
  fetchSkillById(id:number)
  {
    return this.http.get<skillModel>('http://localhost:8080/skills/skill/'+id);
  }

}
