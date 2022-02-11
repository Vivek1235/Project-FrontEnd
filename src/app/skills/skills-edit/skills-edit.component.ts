import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../service/navbar.service";
import {SkillsService} from "../../service/skills.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {skill} from "../../model/skill.model";

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  skill:skill=new skill(0,"",0);

  message:any;
  constructor(private nav:NavbarService,private skillService:SkillsService,private router:Router) { }

  ngOnInit(): void {
    this.nav.hide();
  }
  updateSkill(form:NgForm)
  {

    this.skill.skillName=form.value.newSkill;
    this.skill.level=form.value.level;
    this.skillService.updateSkillById(this.skill).subscribe(data=>{this.message="";
        this.close();}
      , error=>this.message="skill already exists");
  }

  close()
  {
    this.router.navigate(['/skills']);
  }

}
