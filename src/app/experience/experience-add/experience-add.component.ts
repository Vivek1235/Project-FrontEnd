import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Form, NgForm} from "@angular/forms";
import {ExperienceModel} from "../../model/experience.model";
import {ExperienceService} from "../../service/experience.service";

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {
  experience:ExperienceModel=new ExperienceModel(0,"","","","",new Date(),new Date());
  constructor(private router:Router,private experienceService:ExperienceService) { }

  ngOnInit(): void {
  }
  addExperience(form:NgForm)
  {
        this.experience=form.value.data;
        console.log(this.experience);
        this.experienceService.addExperience(this.experience).subscribe((data:ExperienceModel)=>{console.log(data);this.close()},error=>{});
  }
  close()
  {
    this.router.navigate(['/experience']);
  }
}
