import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EducationModel} from "../../model/education.model";
import {EducationService} from "../../service/education.service";

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  education:EducationModel=new EducationModel(0,"","",0,"",new Date(),new Date());
  // @ts-ignore
  educationAddForm: FormGroup;
  constructor(private router:Router,private educationService:EducationService) { }

  ngOnInit(): void {
    this.educationAddForm=new FormGroup({
      'data':new FormGroup({
        'schoolName': new FormControl(null, Validators.required),
        'degreeName': new FormControl(null, Validators.required),
        'grade': new FormControl(null, Validators.required),
        'startDate': new FormControl(null, Validators.required),
        'endDate': new FormControl(null, Validators.required),
        'descript': new FormControl(null)
      })
    })
  }
  addEducation()
  {
    const form=this.educationAddForm;
    this.education=form.value.data;
    console.log(this.education);
    this.educationService.addEducation(this.education).subscribe((data:EducationModel)=>{console.log(data);this.close()},error=>{});
  }
  close()
  {
    this.router.navigate(['/profile']);
  }

}
