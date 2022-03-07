import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,  Router} from "@angular/router";
import {ProfileModel} from "../../model/profile.model";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ProfileService} from "../../service/profile.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
   id:number=0;
   profile=new ProfileModel(0,'','','','','',new Date(),'','');
   // @ts-ignore
  profileEditForm:FormGroup;

  constructor(private router:Router,private route:ActivatedRoute,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileEditForm=new FormGroup(
      {
        'data': new FormGroup({
          'email': new FormControl(null, [Validators.required,Validators.email]),
          'firstName': new FormControl(null, Validators.required),
          'lastName': new FormControl(null, Validators.required),
          'phoneNumber': new FormControl(null, Validators.required),
          'dateOfBirth': new FormControl(null),
          'about': new FormControl(null),
          'address': new FormControl(null),
          'imageUrl': new FormControl(null),

        })
      }
    )

    this.id=parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.profileService.getProfileDetails().subscribe(data=>{   this.profile=data;
    this.profileEditForm.setValue(
      {
        'data':
          {
            'email':this.profile.email,
            'firstName':this.profile.firstName,
            'lastName':this.profile.lastName,
            'phoneNumber':this.profile.phoneNumber,
            'dateOfBirth':this.profile.dateOfBirth,
            'address':this.profile.address,
            'about':this.profile.about,
            'imageUrl':this.profile.imageUrl,
          },


      }
    )});

  }
  close()
  {
    this.router.navigate(['/profile']);
  }
  updateProfile()
  {
    const form=this.profileEditForm;
       this.profile=form.value.data;
       this.profile.id=this.id;
       this.profileService.updateProfile(this.profile).subscribe(
         data=>{this.router.navigate(['/profile']);alert("updated profile")},error=>{alert("error while updating")});

  }




}
