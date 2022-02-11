import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SkillsService} from "../../service/skills.service";
import {NgForm} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {skill} from "../../model/skill.model";
import {Router} from "@angular/router";
import {NavbarService} from "../../service/navbar.service";

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {
  @Output('skillAdded') newSkill=new EventEmitter<skill>();
  skill:skill=new skill(0,"",0);

  message:any;
  constructor(private nav:NavbarService,private skillService:SkillsService,private router:Router) { }

  ngOnInit(): void {
  }
  addSkill(form:NgForm)
  {
    this.skill.skillName=form.value.newSkill;
    this.skill.level=form.value.level;
    this.skillService.addSkill(this.skill).subscribe(data=>{this.message="";this.newSkill.emit(data);
      this.close();}
      , error=>this.message="skill already exists");
  }

  close()
  {
    this.router.navigate(['/skills']);
  }


}
