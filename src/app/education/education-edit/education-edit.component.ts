import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from "../../model/experience.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../service/experience.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {EducationModel} from "../../model/education.model";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {

  education:EducationModel=new EducationModel(0,"","",0," ",new Date(),new Date());
  id:any;
  // @ts-ignore
  educationEditForm:FormGroup;
  constructor(private router:Router,private educationService:EducationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.educationEditForm=new FormGroup({
      'data':new FormGroup({
        'schoolName': new FormControl(null, Validators.required),
        'degreeName': new FormControl(null, Validators.required),
        'grade': new FormControl(null, Validators.required),
        'startDate': new FormControl(null, Validators.required),
        'endDate': new FormControl(null, Validators.required),
        'descript': new FormControl(null)
      })
    })
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.educationService.fetchEducationById(this.id).subscribe((data:EducationModel)=>{this.education=data;
    this.educationEditForm.setValue(
      {
        'data':{
          'schoolName':this.education.schoolName,
          'degreeName':this.education.degreeName,
          'grade':this.education.grade,
          'startDate':this.education.startDate,
          'endDate':this.education.endDate,
          'descript':' ',
               },
      }
    )});


  }
  updateEducation()
  {
    const form=this.educationEditForm;
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
