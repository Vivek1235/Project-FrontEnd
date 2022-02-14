import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from "../../model/experience.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../service/experience.service";
import {NgForm} from "@angular/forms";
import {EducationModel} from "../../model/education.model";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  education:EducationModel=new EducationModel(0,"","",0,"",new Date(),new Date());
  id:any;
  constructor(private router:Router,private educationService:EducationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.educationService.fetchEducationById(this.id).subscribe((data:EducationModel)=>{this.education=data});
  }
  updateEducation(form:NgForm)
  {
    this.education=form.value.data;
    this.education.id=this.id;
    console.log(this.education);
    this.educationService.updateEducationById(this.education).subscribe((data:EducationModel)=>{console.log(data);this.close()},error=>{});

  }
  close()
  {
    this.router.navigate(['/profile']);
  }

}
