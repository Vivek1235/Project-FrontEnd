import { Component, OnInit } from '@angular/core';
import {NavbarService} from "../service/navbar.service";
import {ProfileService} from "../service/profile.service";
import {ProfileModel} from "../model/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile=new ProfileModel(0,'','','','',"",new Date(),"");
  constructor(private nav:NavbarService,private profileService:ProfileService) { }

  ngOnInit(): void {
    this.nav.show();

    this.profile=this.profileService.getProfileDetails();
  }

}
