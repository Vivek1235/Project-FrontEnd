import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {ExperienceService} from "../service/experience.service";
import {UserRegistrationService} from "../service/user-registration.service";
import {ExperienceModel} from "../model/experience.model";
import {SkillsAddComponent} from "../skills/skills-add/skills-add.component";
import {ExperienceAddComponent} from "./experience-add/experience-add.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {EducationModel} from "../model/education.model";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceModel[] = [];

  constructor(private nav: NavbarService,private router:Router, private experienceService: ExperienceService, private service: UserRegistrationService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.nav.show();
    this.experienceService.getExperiencesById(this.service.getUser().id)
      .subscribe((result: ExperienceModel[]) => {
        this.experiences = result;
        console.log(result)
      });


  }
  addExperience()
  {
    this.router.navigate(['/experience','addExperience']);
  }
  deleteExperience(id:number) {

     this.experienceService.deleteExperienceById(id)
       .subscribe(data=>this.experiences=data,error => console.log(error));

  }
  updateEducation(id:number)
  {
    this.router.navigate(['/experience','updateExperience',id]);
  }
}
