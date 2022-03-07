import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../../service/navbar.service";
import {SkillsService} from "../../service/skills.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {skillModel} from "../../model/skill.model";

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  addSkill:skillModel=new skillModel(0,"","");
   newSkill:any;
  message:any;
  // @ts-ignore
  skillsEditForm:FormGroup;
  constructor(private nav:NavbarService,private skillService:SkillsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.nav.hide();

    this.newSkill = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.skillService.fetchSkillById(this.newSkill).subscribe((data:skillModel)=>{this.addSkill=data;
      this.skillsEditForm.setValue(
        {
          'newSkill':this.addSkill.name,
          'level':this.addSkill.level
        }
      )});
    console.log(this.addSkill);
    this.skillsEditForm= new FormGroup({
      'newSkill':new FormControl(this.addSkill.name,Validators.required),
      'level':new FormControl(this.addSkill.level,Validators.required)
    });


  }

  updateSkill()
  {
    const form=this.skillsEditForm;
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
