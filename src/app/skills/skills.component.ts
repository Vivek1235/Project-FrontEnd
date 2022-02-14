import { Component, OnInit } from '@angular/core';
import {skill} from '../model/skill.model';
import {NavbarService} from "../service/navbar.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {UserRegistrationService} from "../service/user-registration.service";

import {SkillsAddComponent} from "./skills-add/skills-add.component";
import {SkillsService} from "../service/skills.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  skills:skill[]=[];
  message:any;
  constructor(private nav:NavbarService,private router:Router,private http:HttpClient,private service:UserRegistrationService,private skillService:SkillsService){

  }

  ngOnInit(): void {
    this.nav.show();
    this.skillService.getSkillsByUserId(this.service.getUser().id)
      .subscribe((result:skill[])=>{this.skills=result;console.log(result)},error => {this.skills=[];});
    }



  addSkill()
  {

    this.router.navigate(['/skills','addSkill']);
  }
  deleteSkill(id:number)
  {
    this.skillService.deleteSkillById(id)
      .subscribe((data)=>{this.skills=data},
          error => {console.log(error)});
  }
  updateSkill(skillId:number)
  {
    this.router.navigate(['/skills','updateSkill',skillId]);
  }

}
