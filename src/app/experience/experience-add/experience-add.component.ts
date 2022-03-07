import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ExperienceModel} from "../../model/experience.model";
import {ExperienceService} from "../../service/experience.service";

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {
  experience:ExperienceModel=new ExperienceModel(0,"","","","",new Date(),new Date());
  // @ts-ignore
  experienceAddForm:FormGroup;
  constructor(private router:Router,private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.experienceAddForm=new FormGroup({
      'data': new FormGroup(
        {
          'title': new FormControl(null, Validators.required),
          'employmentType': new FormControl(null, Validators.required),
          'companyName': new FormControl(null, Validators.required),
          'location': new FormControl(null, Validators.required),
          'startDate': new FormControl(null, Validators.required),
          'endDate': new FormControl(null, Validators.required),
        }
      )
    })
  }
  addExperience()
  {
        const form=this.experienceAddForm;
        this.experience=form.value.data;
        console.log(this.experience);
        this.experienceService.addExperience(this.experience)
          .subscribe((data:ExperienceModel)=>{console.log(data);this.close()},
              error=>{});
  }
  close()
  {
    this.router.navigate(['/profile']);
  }
}
