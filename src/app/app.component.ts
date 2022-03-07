import {Component, OnInit} from '@angular/core';
import {userModel} from "./model/user.model";
import {UserRegistrationService} from "./service/user-registration.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'project-app';

  user:userModel=new userModel(0,"","");
  message:any;
  constructor(private service:UserRegistrationService,private router:Router) {
  }
  ngOnInit() {
     if(this.service.getUser()!=null)
     {
       this.router.navigate(['/profile']);
     }
     else {
       this.router.navigate(['/login']);
     }
  }


}
