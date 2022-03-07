import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SkillsService} from "../../service/skills.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {skillModel} from "../../model/skill.model";
import {Router} from "@angular/router";
import {NavbarService} from "../../service/navbar.service";

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {
  skill:skillModel=new skillModel(0,"","");
  message:any;
  // @ts-ignore
  skillsAddForm:FormGroup;


  constructor(private nav:NavbarService,private skillService:SkillsService,private router:Router) { }

  ngOnInit(): void {
    this.skillsAddForm= new FormGroup({
        'newSkill':new FormControl(null,Validators.required),
        'level':new FormControl(null,Validators.required)
         });

  }
  addSkill()
  {
    const form=this.skillsAddForm;
    this.skill.name=form.value.newSkill;
    this.skill.level=form.value.level;
    this.skillService.addSkill(this.skill).subscribe(data=>{this.message="";
      this.close(); alert("skill addded")}
      , error=>this.message="skill already exists");
  }

  close()
  {
    this.router.navigate(['/profile']);
  }


}
