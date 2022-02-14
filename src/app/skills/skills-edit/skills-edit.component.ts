import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../service/navbar.service";
import {SkillsService} from "../../service/skills.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {skill} from "../../model/skill.model";
import {parse} from "@angular/compiler/src/render3/view/style_parser";

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  addSkill:skill=new skill(0,"","");
   newSkill:any;
  message:any;
  constructor(private nav:NavbarService,private skillService:SkillsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.nav.hide();

    this.newSkill = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.skillService.fetchSkillById(this.newSkill).subscribe((data:skill)=>{this.addSkill=data});
  }

  updateSkill(form:NgForm)
  {

    this.addSkill.id=this.newSkill;
    this.addSkill.name=form.value.newSkill;
    this.addSkill.level=form.value.level;
    console.log(this.addSkill);
    this.skillService.updateSkillById(this.addSkill).subscribe(data=>{this.message="",console.log(data);
        this.close();}
      , error=>this.message="skill already exists");
  }

  close()
  {
    this.router.navigate(['/profile']);
  }

}
