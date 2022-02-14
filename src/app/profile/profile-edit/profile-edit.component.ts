import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileModel} from "../../model/profile.model";
import {NgForm} from "@angular/forms";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
   id:number=0;
   profile=new ProfileModel(0,'','','','','',new Date(),'','');
  constructor(private router:Router,private route:ActivatedRoute,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.id=parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.profileService.getProfileDetails().subscribe(data=>{   this.profile=data;});
  }
  close()
  {
    this.router.navigate(['/profile']);
  }
  updateProfile(form:NgForm)
  {
       this.profile=form.value.data;
       this.profile.id=this.id;
       this.profileService.updateProfile(this.profile).subscribe(
         data=>{this.router.navigate(['/profile']);alert("updated profile")},error=>{alert("error while updating")});

  }

}
