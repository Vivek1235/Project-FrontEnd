import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ExperienceModel} from "../../model/experience.model";
import {ExperienceService} from "../../service/experience.service";
import {NgForm} from "@angular/forms";
import {EducationModel} from "../../model/education.model";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  education:EducationModel=new EducationModel(0,"","",0,"",new Date(),new Date());
  constructor(private router:Router,private educationService:EducationService) { }

  ngOnInit(): void {
  }
  addEducation(form:NgForm)
  {
    console.log(form);
    this.education=form.value.data;
    console.log(this.education);
    this.educationService.addEducation(this.education).subscribe((data:EducationModel)=>{console.log(data);this.close()},error=>{});
  }
  close()
  {
    this.router.navigate(['/profile']);
  }

}
