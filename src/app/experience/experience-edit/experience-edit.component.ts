import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from "../../model/experience.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../service/experience.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  experience:ExperienceModel=new ExperienceModel(0,"","","","",new Date(),new Date());
  id:number=0;
  // @ts-ignore
  experienceEditForm:FormGroup;

  constructor(private router:Router,private experienceService:ExperienceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.experienceEditForm=new FormGroup({
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
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.experienceService.fetchExperienceById(this.id).subscribe((data:ExperienceModel)=>{this.experience=data;
    this.experienceEditForm.setValue({
        'data': {
          'title':this.experience.title,
          'employmentType':this.experience.employmentType,
          'companyName':this.experience.companyName,
          'location':this.experience.location,
          'startDate':this.experience.startDate,
          'endDate':this.experience.endDate,
        },
      }
    )});

  }
  updateExperience()
  {
    const form=this.experienceEditForm;
    this.experience=form.value.data;
    this.experience.id=this.id;
    console.log(this.experience);
    this.experienceService.updateExperienceById(this.experience).subscribe((data:ExperienceModel)=>{console.log(data);this.close()},error=>{});
  }
  close()
  {
    this.router.navigate(['/profile']);
  }

}
