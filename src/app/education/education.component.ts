import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {ExperienceModel} from "../model/experience.model";
import {ExperienceService} from "../service/experience.service";
import {UserRegistrationService} from "../service/user-registration.service";
import {MatDialog} from "@angular/material/dialog";
import {EducationModel} from "../model/education.model";
import {EducationService} from "../service/education.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: EducationModel[] = [];

  constructor(private nav: NavbarService,private router:Router, private educationService:EducationService, private service: UserRegistrationService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.nav.show();
    this.educationService.getEducationListByUserId(this.service.getUser().id)
      .subscribe((result: EducationModel[]) => {
        this.educationList = result;
        console.log(result)
      });


  }
  addEducation()
  {
    this.router.navigate(['/education','addEducation']);
  }
  deleteEducation(id:number) {


    console.log(id);
    this.educationService.deleteEducationById(id)
      .subscribe(data=>this.educationList=data,error => console.log(error));

  }
  updateEducation(id:number)
  {
    this.router.navigate(['/education','updateEducation',id]);

  }
}
