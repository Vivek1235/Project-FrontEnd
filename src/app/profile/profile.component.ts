import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {ProfileService} from "../service/profile.service";
import {ProfileModel} from "../model/profile.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  today=new Date();
  public profile=new ProfileModel(0,'','','','',"",new Date(),"",'');
  constructor(private nav:NavbarService,private profileService:ProfileService,private router:Router) { }

  ngOnInit(): void {
    this.nav.show();

    this.profileService.getProfileDetails()
      .subscribe((result:ProfileModel)=>{this.profile=result;
        console.log(result);});


  }
  update(id:number)
  {
    this.router.navigate(['/profile','update',id]);
  }

}
