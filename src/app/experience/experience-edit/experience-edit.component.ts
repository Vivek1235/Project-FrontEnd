import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from "../../model/experience.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../service/experience.service";
import {NgForm} from "@angular/forms";
import {skill} from "../../model/skill.model";

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {

  experience:ExperienceModel=new ExperienceModel(0,"","","","",new Date(),new Date());
  id:number=0;
  constructor(private router:Router,private experienceService:ExperienceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.experienceService.fetchExperienceById(this.id).subscribe((data:ExperienceModel)=>{this.experience=data});
  }
  updateExperience(form:NgForm)
  {

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
